<?php
function pageController(){
  if (isset($_GET['count']) && isset($_GET['direction'])) {

  }else {
    $_GET['count'] = 0;
    $_GET['direction'] = 'START';
  }
  var_dump($_GET);
  return [
    'count' => $_GET['count'],
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

     <a href="counter.php?direction=UP&count=<?=$count +1?>">UP</a>
     <a href="counter.php?direction=DOWN&count=<?=$count-1?>">DOWN</a>
     <h1>THE COUNT IS: <?= $count?></h1>
   </body>
 </html>
