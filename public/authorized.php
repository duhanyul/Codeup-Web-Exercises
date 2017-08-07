<?php
require_once "../Auth.php";
  session_start();
  if (!Auth::check()) {
    header("Location: login.php");
  }
 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AUTHORIZED</title>
  </head>
  <body>
    <h1>AUTHORIZED</h1>
    <a href="logout.php">LOGOUT</a>
  </body>
</html>
