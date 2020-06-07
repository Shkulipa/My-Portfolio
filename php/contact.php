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


$msg = "Name: $Name.\n" .
"Email: $Email\n" .
"Message: $Message";

$success = mail('oleksii.shkulipa@gmail.com', 'Contact', $msg,  'From:' . $Email);
  if (!$success) {
  $errorMessage = error_get_last()['message'];
  }


echo 'Name: ' . $Name . '<br />' . '<br />';
echo 'Email: ' . $Email . '<br />' . '<br />';
echo 'Message: ' . $Message;

?>


</body>
</html>