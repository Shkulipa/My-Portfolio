<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message</title>
</head>
<body>

  <h1>This contact wants connect with you</h1>

<?php

  $Name = $_POST['Name'];
  $Email = $_POST['Email'];
  $Message = $_POST['Message'];

  echo 'Name : ' . $Name . '<br/>';
  echo 'Email: ' . $Email . '<br/>';
  echo 'Message: ' . $Message . '<br/>';

?>


</body>
</html>