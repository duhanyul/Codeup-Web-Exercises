<?php
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

function randomAdj($input){
  $adj = array_rand($input);
  return $input[$adj];
}

function randomNoun($input){
  $noun = array_rand($input);
  return $input[$noun];
}
function serverName($adj,$noun){
  return ($adj . $noun);
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>RANDOM SERVER NAME</title>
  </head>
  <body>
    <h1>THIS IS YOUR NEW SERVER NAME</h1>
    <h2><?= serverName(randomAdj($adjectives),randomNoun($nouns))?></h2>
  </body>
</html>
