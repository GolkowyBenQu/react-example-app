<?php
/**
 * Created by PhpStorm.
 * User: przemek
 * Date: 27.04.17
 * Time: 15:34
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST');

var_dump($_POST);
$request_body = file_get_contents('php://input');
var_dump(json_decode($request_body));
die('test');