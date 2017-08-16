<?php
require_once 'Model.php';

$model = new Model();

$model->username = 'Danny';

echo $model->password . PHP_EOL;

echo "Your username is: " . $model->username . PHP_EOL;
 ?>
