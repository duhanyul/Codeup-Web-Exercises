<?php
function pageController(){
  isset($_GET['hits'])?$hits = $_GET['hits'] : $hits = $_GET['hits'] = 0;
  isset($_GET['hit'])?$hit = $_GET['hit'] : $hit = $_GET['hit'] = 'START';
  var_dump($_GET);
  if ($hit == 'hit') {
    $hits++;
  }else {
    $hits = 0;
    if ($hit == 'miss') {
      $hit = 'YOU WIN';
    }
  }
  return [
    'hit' => $hit,
    'hits' => $hits
  ];
}
extract(pageController());
 ?>

 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title></title>
   </head>
   <body>
     <h1>PONG</h1>
     <h2><?=$hit?></h2>
     <h1><?=$hits?></h1>
    <a href="ping.php?hit=<?='hit'?>&hits=<?=$hits?>">HIT</a>
    <a href="ping.php?hit=<?='miss'?>&hits=<?=$hits?>">MISS</a>
   </body>
 </html>
