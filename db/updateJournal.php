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
        !isset($received_data['journalID']) || 
        !isset($received_data['journalName']) || 
        !isset($received_data['journalColor'])
    ) {
        echo json_encode(['success' => false, 'message' => 'Missing data']);
        exit;
    }

    $received_journalID = $received_data['journalID'];
    $received_journalName = $received_data['journalName'];
    $received_journalColor = $received_data['journalColor'];

    // Store onto database
    $stmt = $pdo->prepare("
        UPDATE journal
        SET journal_name = :received_journalName, journal_color = :received_journalColor
        WHERE journalID = :received_journalID
    ");
    $stmt->execute([
        ':received_journalID' => $received_journalID,
        ':received_journalName' => $received_journalName,
        ':received_journalColor' => $received_journalColor
    ]);

    echo json_encode(['success' => true, 'message' => 'Journal Updated']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ']);
}
?>
