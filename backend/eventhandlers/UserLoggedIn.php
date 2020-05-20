<?php
$response = new stdClass();
$response->status = 'error';

try {
  if (isset($eventData->username_or_email) && is_string($eventData->username_or_email)
      && isset($eventData->password) && is_string($eventData->password)) {
        
    $eventData->username_or_email = strtolower(trim($eventData->username_or_email));
    $eventData->email = strtolower(trim($eventData->username_or_email));
    
    $stmt = $conn->prepare("select ID, Password from User where Email = :email or Username = :username");
    $stmt->bindValue(":username", $eventData->username_or_email, PDO::PARAM_STR);
    $stmt->bindValue(":email", $eventData->username_or_email, PDO::PARAM_STR);
    $stmt->execute();
    $res = $stmt->fetch(PDO::FETCH_OBJ);
    if (!$res || !password_verify($eventData->password, $res->Password))
      $response->errorMessage = 'User doesn\'t exist or password is incorrect.';
    
    else {
      $sessionID = session_create_id('user-');
      session_id($sessionID);
      session_start();
      $_SESSION['userID'] = $res->ID;
      $response->sessionID = session_id();
      $response->status = 'success';
      session_write_close();
    }
    
  } else
    $response->errorMessage = 'Incorrect eventData.';

} catch (PDOException $e) {
  $response->errorMessage = "Database error processing the event.";
  
} catch (Exception $e) {
  $response->errorMessage = 'Unknown error.';
}

echo (json_encode($response));
?>