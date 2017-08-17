 <?php

/**
 * A Class for interacting with the national_parks database table
 *
 * contains static methods for retrieving records from the database
 * contains an instance method for persisting a record to the database
 *
 * Usage Examples
 *
 * Retrieve a list of parks and display some values for each record
 *
 *      $parks = Park::all();
 *      foreach($parks as $park) {
 *          echo $park->id . PHP_EOL;
 *          echo $park->name . PHP_EOL;
 *          echo $park->description . PHP_EOL;
 *          echo $park->areaInAcres . PHP_EOL;
 *      }
 *
 * Inserting a new record into the database
 *
 *      $park = new Park();
 *      $park->name = 'Acadia';
 *      $park->location = 'Maine';
 *      $park->areaInAcres = 48995.91;
 *      $park->dateEstablished = '1919-02-26';
 *
 *      $park->insert();
 *
 */
 require_once "Model.php";
class Park extends Model
{

    ///////////////////////////////////
    // Static Methods and Properties //
    ///////////////////////////////////

    /**
     * our connection to the database
     */

    
    public static $dbc = null;


    /**
     * establish a database connection if we do not have one
     */
    public static function dbConnect() {

        require 'db_connect.php';

        if (! is_null(self::$dbc)) {
            return;
        }

        self::$dbc = $connection;

    }

    /**
     * returns the number of records in the database
     */
    public static function count() {
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to query the database for the
        //       number of existing park records

        self::dbConnect();

        $statement = self::$dbc->query('select count(*) from national_parks;');

        $count = $statement->fetchAll(PDO::FETCH_ASSOC);

        $count = (int)$count[0]['count(*)'];


        return $count;




    }

    /**
     * returns all the records
     */
    public static function all() {
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to query the database for all the
        //       records in the parks table
        // TODO: iterate over the results array and transform each associative
        //       array into a Park object
        // TODO: return an array of Park objects

        self::dbConnect();

        $statement = self::$dbc->query('select * from national_parks');

        $parks_array = $statement->fetchAll(PDO::FETCH_OBJ);

        return $parks_array;




    }

    /**
     * returns $resultsPerPage number of results for the given page number
     */
    public static function paginate($pageNo, $resultsPerPage = 4) {
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: calculate the limit and offset needed based on the passed
        //       values
        // TODO: use the $dbc static property to query the database with the
        //       calculated limit and offset
        // TODO: return an array of the found Park objects

        self::dbConnect();

        $stmt = self::$dbc->prepare("SELECT * FROM national_parks LIMIT :limits OFFSET :key");
        $stmt->bindValue(':limits', (int)$resultsPerPage, PDO::PARAM_INT);
        $stmt->bindValue(':key',  (($pageNo-1)*$resultsPerPage),  PDO::PARAM_INT);

        $stmt->execute();
        $parks_array = $stmt->fetchAll(PDO::FETCH_ASSOC);


        $park_Objs = [];

        foreach ($parks_array as $result) {

          $park = new Park();
          $park->id = $result['id'];
          $park->name = $result['name'];
          $park->location = $result['location'];
          $park->dateEstablished = $result['date_established'];
          $park->areaInAcres = $result['area_in_acres'];
          $park->description = $result['description'];

          $park_Objs[] = $park;


        }

        return $park_Objs;


    }

    /////////////////////////////////////
    // Instance Methods and Properties //
    /////////////////////////////////////

    /**
     * properties that represent columns from the database
     */

    /**
     * inserts a record into the database
     */
    protected function insert() {

        self::dbConnect();

        $newPark = "insert into national_parks (name,location,date_established,area_in_acres,description)
        values(:park_name,:location,:date,:area,:desc);";

        $statement = self::$dbc->prepare($newPark);

        $statement->bindValue(':park_name',$this->name,PDO::PARAM_STR);
        $statement->bindValue(':location',$this->location,PDO::PARAM_STR);
        $statement->bindValue(':date',$this->dateEstablished,PDO::PARAM_STR);
        $statement->bindValue(':area',$this->areaInAcres,PDO::PARAM_STR);
        $statement->bindValue(':desc',$this->description,PDO::PARAM_STR);

        $statement->execute();

        $this->id = self::$dbc->lastInsertId();



        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to create a perpared statement for
        //       inserting a record into the parks table
        // TODO: use the $this keyword to bind the values from this object to
        //       the prepared statement
        // TODO: excute the statement and set the $id property of this object to
        //       the newly created id





    }

    protected function update(){
        return 'hi';
    }
}
