<?php 
//Handle JSON 
header('Content-Type: application/json');

//Connection
require 'connection.php';

//Recieve Passed JSON
$received_data = json_decode(file_get_contents("php://input"), true);

//Validate Passed Data
if (!isset($received_data['userID'])) {
    echo json_encode(['success' => false, 'message' => 'No userID provided']);
    exit;
}
$received_userID = $received_data['userID'];

//Search Journals based on userID
$sql_stmt = "SELECT * FROM journal WHERE userID = :received_userID";
$stmt = $pdo->prepare($sql_stmt);
$stmt->execute(['received_userID' => $received_userID]);
$fetched_info = $stmt->fetchAll(PDO::FETCH_ASSOC);

//User has no journals
if(!$fetched_info){
    echo json_encode(['success' => false, 'journals' => []]);
    exit;
}

//User has journals
echo json_encode([
    'success' => true,
    'journals' => $fetched_info
]);
?>