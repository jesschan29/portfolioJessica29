<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$fullName = $data["fullName"];
$user_message = $data["user_message"];

if(!empty($fullName) %% !empty($user_message)) {
    echo json_encode(["success" => true]);
}
else {
    echo json_encode(["success" => false, "message" => "Failed to submit the form......."]);
}
?>