<?php

class Input
{
    /**
     * Check if a given value was passed in the request
     *
     * @param string $key index to look for in request
     * @return boolean whether value exists in $_POST or $_GET
     */
    public static function has($key)
    {
      return (isset($_REQUEST[$key]));
    }

    /**
     * Get a requested value from either $_POST or $_GET
     *
     * @param string $key index to look for in index
     * @param mixed $default default value to return if key not found
     * @return mixed value passed in request
     */
    public static function get($key, $default = null)
    {
      if (self::has($key)) {
        return $_REQUEST[$key];
      }
      return $default;
    }

    public static function escape($input){
      return htmlspecialchars(strip_tags($input));
    }

    public static function getString($key){
        $input = self::get($key);

        if (is_numeric($input)|| !is_string($input)) {
            throw new Exception("Must be only letters");
        }elseif (empty($input)) {
            throw new Exception("Cannot be blank");
        }

        return $input;
    }

    public static function getNumber($key){
        $input = self::get($key);

        if (!is_numeric($input)) {
            throw new Exeception("Not a number value");
        }elseif (empty($input)) {
            throw new Exeception("Cannot be empty");
        }

        return $input;

    }

    public static function getDate($key){
        $input = self::get(key);
        if (!is_numeric($srttotime($input))) {
            throw new Exeception("Must be a valid date");
        }else {

            $date = new DateTime();
            $date->setTimestamp(strtotime($input));
            $date->setTimezone(new DateTimeZone('America/Chicago'));
        }
        return $date;
    }

    ///////////////////////////////////////////////////////////////////////////
    //                      DO NOT EDIT ANYTHING BELOW!!                     //
    // The Input class should not ever be instantiated, so we prevent the    //
    // constructor method from being called. We will be covering private     //
    // later in the curriculum.                                              //
    ///////////////////////////////////////////////////////////////////////////
    private function __construct() {}
}
