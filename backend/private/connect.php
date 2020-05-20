<?php

$host = "sql.scena22.nazwa.pl";
$username = "scena22_meeter";
$password = "3qu!NEYF#KaeJDH";
$dbname = "scena22_meeter";

try {
  $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
}
catch(PDOException $e) {
  die("Error connecting to the database! {$e->getMessage()}");
}

unset($host, $username, $password, $dbname);

?>