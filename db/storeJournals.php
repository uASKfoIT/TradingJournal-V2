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
        !isset($received_data['userID']) || 
        !isset($received_data['journalName']) || 
        !isset($received_data['journalColor'])
    ) {
        echo json_encode(['success' => false, 'message' => 'Missing data']);
        exit;
    }

    $received_userID = $received_data['userID'];
    $received_journalName = $received_data['journalName'];
    $received_journalColor = $received_data['journalColor'];

    // Store onto database
    $stmt = $pdo->prepare("
        INSERT INTO journal (journal_name, userID, journal_color)
        VALUES (:received_journalName, :received_userID, :received_journalColor)
    ");
    $stmt->execute([
        ':received_journalName' => $received_journalName,
        ':received_userID' => $received_userID,
        ':received_journalColor' => $received_journalColor
    ]);

    echo json_encode(['success' => true, 'message' => 'Journal Added']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}
?>
