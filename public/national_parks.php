<?php
require_once __DIR__ . '/../db_connect.php';
require_once '../Input.php';

function pageController($dbc){
  $data = [];

  if (!empty($_GET)) {

    $full_list = 'select * from national_parks';

    $fullStmnt = $dbc->query($full_list);

    $all_parks = $fullStmnt->fetchAll(PDO::FETCH_ASSOC);

    $last_park = end($all_parks);
    $end = $last_park['id'];

    $data['end'] = $end;

    if (is_numeric(Input::get('page_number')) && Input::get('page_number') <= ($end/(4)))
    {


      /******** Current page list *********/


      $request = abs(Input::get('page_number'));

      $offset = ($request-1) * 4;

      $query = "select * from national_parks limit 4 offset $offset;";

      $statement = $dbc->query($query);

      $parks_array = $statement->fetchAll(PDO::FETCH_ASSOC);

      $final_park = end($parks_array);
      $last = $final_park['id'];



      $data['page_number'] = $request;
      $data['parks'] = $parks_array;
      $data['last'] = $last;
    }
    else
    {
      $query = 'select * from national_parks limit 4;';

      $statement = $dbc->query($query);


      $data['page_number'] = 1;
      $data['parks'] = $statement->fetchAll(PDO::FETCH_ASSOC);
      $data['end'] = 0;
      $data['last'] = 1;
    }

  }else {
    $query = 'select * from national_parks limit 4;';

    $statement = $dbc->query($query);


    $data['page_number'] = 1;
    $data['parks'] = $statement->fetchAll(PDO::FETCH_ASSOC);
    $data['end'] = 0;
    $data['last'] = 1;

  }

  if (!empty($_POST)) {

    $park_name = Input::get('park_name');
    $location = Input::get('location');
    $date = Input::get('date');
    $area = Input::get('area');
    $desc = Input::get('desc');

    $newPark = "insert into national_parks (name,location,date_established,area_in_acres,description)
    values(:park_name,:location,:date,:area,:desc);";

    $stmnt = $dbc->prepare($newPark);

    $stmnt->bindValue(':park_name',$park_name,PDO::PARAM_STR);
    $stmnt->bindValue(':location',$location,PDO::PARAM_STR);
    $stmnt->bindValue(':date',$date,PDO::PARAM_STR);
    $stmnt->bindValue(':area',$area,PDO::PARAM_STR);
    $stmnt->bindValue(':desc',$desc,PDO::PARAM_STR);

    $stmnt->execute();

  }
  return $data;
}
extract(pageController($dbc));


?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>national parks</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
     rel="stylesheet"
     integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
     crossorigin="anonymous">

  </head>

  <body>
    <div class="container">

      <h1 class="jumbotron text-center title">Hey yo we got some wicked Paarks!</h1>

      <h2>Page: <?= $page_number?></h1>

      <table class="table">

        <tr>
          <th>Park Name</th>
          <th>Location</th>
          <th>Date Established</th>
          <th>Area in Acres</th>
        </tr>

        <?php foreach ($parks as $park): ?>
          <tr>
            <td><?= $park['name'] ?></td>
            <td><?= $park['location'] ?></td>
            <td><?= $park['date_established']?></td>
            <td><?= $park['area_in_acres']?></td>
          </tr>
        <?php endforeach; ?>
      </table>

      <div class='text-center'>
        <img src="img/wicked_smaht.gif" alt="">
      </div>

      <a id="prev"href="national_parks.php?page_number=<?=$page_number-1?>">Prev</a>
      <a id="next"href="national_parks.php?page_number=<?=$page_number+1?>">Next</a>

      <form method="post">
          <div class="form-group">
            <label for="name">Park Name</label>
            <input type="text" name="park_name" value="" id="name" placeholder="enter your park name" required>
          </div>

        <div class="form-group">
          <label for="location">Location</label>
          <input type="text" name="location" value="" id="location" placeholder="enter your park name" required>
        </div>

        <div class="form-group">
          <label for="date_established">Date Established</label>
          <input type="text" name="date" value="" id="date_established" placeholder="enter established date" required>
        </div>

        <div class="form-group">
          <label for="area">Area in Square foot</label>
          <input type="text" name="area" value="" id="area" placeholder="enter park area" required>
        </div>

        <div class="form-group">
          <label for="desc">Park Description</label>
          <input type="text" name="desc" value="" id="desc" placeholder="enter park description">
        </div>

        <div class="form-group">
          <input type="submit" name="" value="ADD YOUR PARK">
        </div>


      </form>
    </div>




    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
      var getRequest = "<?=$page_number?>";
      console.log(getRequest);
      var end = "<?=$end?>";
      console.log(end);
      var current_end = "<?=$last?>";
      console.log(current_end);

      if (parseInt(getRequest) == 1) {
          $('#prev').hide();
        }

        if (end == current_end){
          $('#next').hide();
        }

    </script>

  </body>

</html>
