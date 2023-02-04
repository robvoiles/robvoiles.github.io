<?php

DEFINE ('DB_USER', 'sql9595583');
DEFINE ('DB_PSWD', 'xFuKs66uAp');
DEFINE ('DB_HOST', 'sql9.freemysqlhosting.net');
DEFINE ('DB_NAME', 'sql9595583');

$dbcon = mysqli_connect(DB_HOST,DB_USER,DB_PSWD,DB_NAME);


if (!$dbcon) {
	die('error connection to db')
}

echo 'yeeeet'



?>

