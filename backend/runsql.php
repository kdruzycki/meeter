<?php
require_once('private/connect.php');
?>
<form method="post">
<label>Query:<br/>
<textarea name="query"></textarea></label><br/>
<?php
try {
  if (isset($_POST['query'])) {
    $stmt = $conn->prepare($_POST['query']);
    $stmt->execute();
    ?>
    <label>Response:<br/>
    <textarea>
    <?php
    print_r($stmt->fetchAll(PDO::FETCH_ASSOC));
    ?>
    </textarea></label><br/>
    <?php
  }
}
catch (PDOException $e) {
  echo($e->getMessage());
}
?>
<input type="submit"/>
</form>