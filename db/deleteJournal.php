<?php
// Handle JSON
header('Content-Type: application/json');

// Connection 
require 'connection.php';

try {
    // Receive JSON
    $received_data = json_decode(file_get_contents("php://input"), true);

    // Validate Passed Info
    if (
        !isset($received_data['journalID']) 
    ) {
        echo json_encode(['success' => false, 'message' => 'Missing data']);
        exit;
    }

    $received_journalID = $received_data['journalID'];

    // Store onto database
    $stmt = $pdo->prepare("
        DELETE FROM journal 
        WHERE journalID = :received_journalID"
        );

    $stmt->execute([
        ':received_journalID' => $received_journalID
        ]);

    echo json_encode(['success' => true, 'message' => 'Journal Deleted']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}
?>
