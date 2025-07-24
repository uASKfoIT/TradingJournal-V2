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

//User ALREADY exist?
$sql = "SELECT 1 FROM users WHERE LOWER(username) = LOWER(:recieved_username) LIMIT 1";
$stmt = $pdo->prepare($sql);
$stmt->execute(['recieved_username' => $recieved_username]);
$user = $stmt->fetch();

if($user){//YES
    echo json_encode(['success' => false, 'error' => 'Username taken.']);
    exit;
}

//Store User Info
if ($recieved_username && $recieved_password) {
    $hashedPassword = password_hash($recieved_password, PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (:recieved_username, :hashed_password)");
        $stmt->execute([
            ':recieved_username' => $recieved_username,
            ':hashed_password' => $hashedPassword
        ]);

        echo json_encode(['success' => true, 'message' => 'User registered.']);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]); 
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Missing username or password.']);
}
?>