<?php
require 'Park.php';

$parks = Park::all();
var_dump(end($parks));
 ?>
