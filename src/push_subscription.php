<?php
$subscription = json_decode(file_get_contents('php://input'), true);

if (!isset($subscription['endpoint'])) {
    echo 'Error: not a subscription';
    return;
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        // create a new subscription entry in your database (endpoint is unique)
        $bd = new PDO("mysql:host=127.0.0.1:8080;dbname=push-notifications;charset=utf-8", "root", ""); // $mysqli = new mysqli("127.0.0.1:8080", "root", "" ,"push-notifications");

        $requete = $bd->prepare(" INSERT INTO push-notif(endpoint) VALUES ( ? ) ");
        $requete->execute($_POST['endpoint']);
        break;
    case 'PUT':
        // update the key and token of subscription corresponding to the endpoint
        $bd = new PDO("mysql:host=127.0.0.1:8080;dbname=push-notifications;charset=utf-8", "root", "");

        $requete = $bd->prepare(" UPDATE INTO push-notif(p256,auth) VALUES ( ?, ? ) ");
        $requete->execute($_POST['p256dh'], $_POST['auth']);
        break;
    case 'DELETE':
        // delete the subscription corresponding to the endpoint
        $bd = new PDO("mysql:host=127.0.0.1:8080;dbname=push-notifications;charset=utf-8", "root", "");

        $requete = $bd->prepare(" DELETE INTO push-notif(endpoint) Where endpoint= ? ");
        $requete->execute($_POST['endpoint'], $_POST['p256dh'], $_POST['auth']);
        break;
    default:
        echo "Error: method not handled";
        return;
}
