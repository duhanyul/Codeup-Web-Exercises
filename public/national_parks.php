<?php
require_once __DIR__ . '/../db_connect.php';
require_once '../Input.php';

function pageController($dbc){
  $data = [];

  if (!empty($_REQUEST)) {

    $lastPage = 15;
    if (is_numeric(Input::get('page_number')) && Input::get('page_number') <= $lastPage && Input::get('page_number') >= 1) {
      $request = Input::get('page_number');

      $offset = ($request-1) * 4;

      $query = "select * from national_parks limit 4 offset $offset;";

      $statement = $dbc->query($query);

      $data['page_number'] = $request;
      $data['parks'] = $statement->fetchAll(PDO::FETCH_ASSOC);
    }else{
      $query = 'select * from national_parks limit 4;';

      $statement = $dbc->query($query);


      $data['page_number'] = $lastPage;
      $data['parks'] = $statement->fetchAll(PDO::FETCH_ASSOC);
    }

  }else {
    $query = 'select * from national_parks limit 4;';

    $statement = $dbc->query($query);


    $data['page_number'] = 1;
    $data['parks'] = $statement->fetchAll(PDO::FETCH_ASSOC);

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
     <style media="screen">
       body{
         background-image: url('/img/park_background.jpg');
       }
       .title{
         font-size: 10vh;
       }
       table{
         background-color: white;
       }
       a{
         font-size: 10vh;
         color: white;
       }
       h2{
         font-size: 24vh;
         color: white;
       }
       #next{
         float: right;
       }
     </style>
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
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
      var getRequest = "<?=$page_number?>";

      if (parseInt(getRequest) == 1) {
          $('#prev').hide();
        }

        if (parseInt(getRequest) == 15) {
          $('#next').hide();
        }

    </script>

  </body>

</html>
