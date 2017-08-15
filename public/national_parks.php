<?php
require_once '../Park.php';
require_once '../Input.php';

function pageController(){
  $data = [];

  if (!empty($_GET)) {

    $end = Park::count();


    $pageNo = abs(Input::get('page_number'));

    if (Input::has('limit')) {
      $limit = Input::get('limit');
      if (!is_numeric($limit)) {
        $limit = 4;
      }
    }else {
      $limit = 4;
    }


    if (is_numeric($pageNo) && $pageNo <= ($end/((int)$limit)+1))
    {

      $parks = Park::paginate($pageNo,$limit);



      $last = end($parks);

      $last = $last->id;

      $pageNo = Input::escape($pageNo);
      $limit = (int)Input::escape($limit);




      $data['page_number'] = $pageNo;
      $data['parks'] = Park::paginate($pageNo,$limit);
      $data['end'] = $end;
      $data['last'] = $last;
      $data['limit'] = $limit;
    }
    else
    {

      $parks = Park::paginate(1);

      $data['page_number'] = 1;
      $data['parks'] = $parks;
      $data['end'] = 0;
      $data['last'] = 1;
      $data['limit'] = $limit;
    }

  }else {
    $parks = Park::paginate(1);

    $data['page_number'] = 1;
    $data['parks'] = $parks;
    $data['end'] = 0;
    $data['last'] = 1;
    $data['limit'] = 4;

  }

  if (!empty($_POST)) {

    $park = new Park();
    $park->name = Input::escape(Input::get('park_name'));
    $park->location = Input::escape(Input::get('location'));
    $park->dateEstablished = Input::escape(Input::get('date'));
    $park->areaInAcres = Input::escape(Input::get('area'));
    $park->description = Input::escape(Input::get('desc'));

    $park->insert();



  }
  return $data;
}
extract(pageController());


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
            <td><?= Input::escape($park->name) ?></td>
            <td><?= Input::escape($park->location) ?></td>
            <td><?= Input::escape($park->dateEstablished)?></td>
            <td><?= Input::escape($park->areaInAcres)?></td>
          </tr>
        <?php endforeach; ?>
      </table>

      <div class='text-center'>
        <img src="img/wicked_smaht.gif" alt="">
      </div>

      <a id="prev"href="national_parks.php?page_number=<?=Input::escape($page_number-1)?>&limit=<?=Input::escape($limit)?>">Prev</a>
      <a id="next"href="national_parks.php?page_number=<?=Input::escape($page_number+1)?>&limit=<?=Input::escape($limit)?>"Next</a>
      <a href="?page_number=1&limit=10">10 results per page</a>
      <a href="?page_number=1&limit=4">4 results per page</a>
      <a href="?page_number=1&limit=7">7 results per page</a>

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
          <input type="date" name="date" value="" id="date_established" placeholder="enter established date" required>
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
