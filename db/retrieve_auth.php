<?php 
//Handle JSON 
header('Content-Type: application/json');

//Connection
require 'connection.php';

//Recieve Passed JSON
$received_data = json_decode(file_get_contents("php://input"), true);

//Validate Passed Data
$recieved_username = isset($received_data['username']) ? trim($received_data['username']) : null;
$recieved_password = isset($received_data['password']) ? trim($received_data['password']) : null;

//Search User
$sql_stmt = "SELECT * FROM users WHERE LOWER(username) = LOWER(:recieved_username)";
$stmt = $pdo->prepare($sql_stmt);
$stmt->execute(['recieved_username' => $recieved_username]);
$fetched_user = $stmt->fetch(PDO::FETCH_ASSOC);

//No user exist
if(!$fetched_user){
    echo json_encode(['success' => false, 'message' => 'Username Does Not Exist']);
    exit;
}

//Validate User Info
$fetched_password = $fetched_user['password'];
$fetched_userID = $fetched_user['userID'];

if (password_verify($recieved_password, $fetched_password)){
    echo json_encode(['success' => true, 'message' => 'correct password', 'userID' => $fetched_userID]);
}else{
    echo json_encode(['success' => false, 'message' => 'Incorrect Password']);
}

?>

