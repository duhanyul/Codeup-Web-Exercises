<?php
require_once "../Auth.php";
function pageController(){
  session_start();
  Auth::logout();
  header("Location: login.php");
  die();
}
  pageController();
 ?>
