<?php
function pageController(){
  session_start();
  $login = (isset($_POST['login'])) ? $_POST['login'] : '';
  $password = (isset($_POST['password'])) ? $_POST['password'] : '';
  $logged_in_user = (isset($_SESSION['logged_in_user'])) ? $_SESSION['logged_in_user'] : '';
  $data = [
    'error' => 'Enter Your INFO'
  ];
  if (isset($_SESSION['logged_in_user'])) {
    header("Location: authorized.php");
    die();
  }
  if (!empty($_POST)) {
    if ($login == 'guest' && $password == 'password') {
      $_SESSION['logged_in_user'] = $login;
      header("Location: authorized.php");
      die();
    }else {
      $data['error'] = 'invalid username or password';
    }
  }else {
    $data['error'] = 'INPUT LOGIN INFO';
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
      <input type="text" name="login" value="" id="login">
      <label for="password">PASSWORD:</label>
      <input type="password" name="password" value="" id="password">
      <input type="submit" name="" value="LOGIN">
    </form>
  </body>
</html>
