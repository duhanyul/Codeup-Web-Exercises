<?php
function pageController(){
  $favs = ["stuff","things","people","entertainment","you"];
  $contacts = [
    'contact1'=> [
      "name" => "Jack Blank",
      "number"=> "123-123-1234"
    ],
    'contact2'=> [
      "name" => "Sam Smith",
      "number"=> "123-321-5432"
    ],
    'contact3'=> [
      "name" => "Fred Cat",
      "number"=> "333-333-3333"
    ]

  ];

  return $stuff = [
    'favs' => $favs,
    'contacts' => $contacts
  ];
}
extract(pageController());
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>MY FAVORITE THINGS</title>
    <style media="screen">
      tr:nth-child(odd){
        background-color: grey;
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>MY 5 FAVORITE THINGS</h1>
    <table>
      <?php foreach($favs as $key => $fav){ ?>
        <tr>
          <td><?php echo $fav; ?></td>
        </tr>
      <?php }?>
    </table>

    <h1>MY FAVORITE PEOPLE</h1>
    <table>
      <tr>
        <th>NAME</th>
        <th>NUMBER</th>
      </tr>
      <?php foreach ($contacts as $key => $person): ?>
        <tr>
          <td><?= $person['name']; ?></td>
          <td><?= $person['number']; ?></td>
        </tr>
      <?php endforeach?>
    </table>
  </body>
</html>
