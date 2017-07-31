<?php
function randomItem($input){
  $word = array_rand($input);
  return $input[$word];
}
function serverNames($adj,$noun){
  return randomItem($adj) . randomItem($noun);
}
function pageController(){
  $adjectives = [
  "mammoth",
  "giant",
  "spotty",
  "boundless",
  "thoughtful",
  "barbarous",
  "languid",
  "chunky",
  "dizzy",
  "unsightly"
  ];

  $nouns = [
    "afterthought",
    "downtown",
    "observation",
    "beginner",
    "snail",
    "coal",
    "car",
    "wind",
    "airport",
    "insurance"
  ];

  $name = serverNames($adjectives,$nouns);
  return $serverName = [
    'name' => $name
  ];
}
extract(pageController());
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>RANDOM SERVER NAME</title>
  </head>
  <body>
    <h1>THIS IS YOUR NEW SERVER NAME</h1>
    <h2><?= $name?></h2>
  </body>
</html>
