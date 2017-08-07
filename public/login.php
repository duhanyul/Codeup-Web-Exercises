<?php
session_start();
require "lib.php";
require_once "../Input.php";
require_once "../Auth.php";


function pageController(){
  $data = [
    'error' => 'Enter Your INFO'
  ];

  if (Auth::check()) {

    header("Location: authorized.php");
    die();

  }
  $username = Input::get('username');
  $password = Input::get('password');
    if (!empty($_POST)) {

      if (Auth::attempt($username,$password)) {

        header("Location: authorized.php");
        die();

      }else {

        $data['error'] = "INVALID USERNAME AND PASSWORD";

      }
  }
  return $data;
}

extract(pageController());

 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>LOGIN</title>
  </head>
  <body>
    <h1>LOGIN PAGE</h1>
    <h3>TRUST ME</h3>
    <h4>IM NICE</h4>
    <h5>SHH ITS GONNA BE OKAY</h5>
    <h6>YOU'LL SEE</h6>
    <h2><?= $error?></h2>
    <form method="post">
      <label for="login">LOGIN:</label>
      <input type="text" name="username" value="" id="login">
      <label for="password">PASSWORD:</label>
      <input type="password" name="password" value="" id="password">
      <input type="submit" name="" value="LOGIN">
    </form>
  </body>
</html>
