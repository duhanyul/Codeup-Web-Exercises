<?php
function pageController(){
  $login = (isset($_POST['login'])) ? $_POST['login'] : '';
  $password = (isset($_POST['password'])) ? $_POST['password'] : '';
  $data = [
    'error' => 'Enter Your INFO'
  ];
  if ($login !== '' && $password !== '') {
    if ($login == 'guest' && $password == 'password') {
      header("Location: authorized.php");
      die();
    }else {
      $data['error'] = 'invalaid username or password';
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
