<?php

require_once('private/connect.php');

if (!empty($_POST['eventName'])) {
  switch ($_POST['eventName']) {
    //eventy, które nie są dla zalogowanych
    case 'UserCreated':
      //require_once('eventhandlers/UserCreated.php');
      break;
    case 'UserLoggedIn':
      //require_once('eventhandlers/UserLoggedIn.php');
      break;
    default:
      if (!empty($_POST['sessionID'])) {
        session_id($_POST['sessionID']);
        session_start();
        if (empty($_SESSION['userID'])) {
          session_unset();
          die('Niepoprawne sessionID!');
        } else {
          $eventData = NULL;
          if (!empty($_POST['eventData']))
            $eventData = json_decode($_POST['eventData']);
          /*
            Przydatne zmienne:
              - $_SESSION['userID'] - identyfikator usera z bazy danych
              - $eventData - obiekt z danymi naszego eventu
          */
          switch ($_POST['eventName']) {
            //eventy, które są dla zalogowanych
            case 'UserLoggedOut':
              //require_once('eventhandlers/UserLoggedOut.php');
              break;
            case 'UsernameAmended':
              //require_once('eventhandlers/UserLoggedOut.php');
              break;
            case 'DownloadMeetings':
              //require_once('eventhandlers/DownloadMeetings.php');
              break;
            case 'DownloadUsers':
              //require_once('eventhandlers/DownloadUsers.php');
              break;
            case 'DownloadPlaces':
              //require_once('eventhandlers/DownloadPlaces.php');
              break;
            case 'VoteForPlaces':
              //require_once('eventhandlers/VoteForPlaces.php');
              break;
            case 'UserStatusSet':
              //require_once('eventhandlers/UserStatusSet.php');
              break;
            case 'SetDecision':
              //require_once('eventhandlers/SetDecision.php');
              break;
            case 'UserJoined':
              //require_once('eventhandlers/UserJoined.php');
              break;
            case 'MeetingAdded':
              //require_once('eventhandlers/MeetingAdded.php');
              break;
            case 'GeneratePlaces':
              //require_once('eventhandlers/GeneratePlaces.php');
              break;
          }
          session_write_close();
        }
      }
      break;
  }
}

?>