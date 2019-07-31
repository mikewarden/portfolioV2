<!DOCTYPE>
<html>
<body>
 
 
<?php
$servername = "localhost";
$username = "mikeWardenAdmin";
$password = "JetSmileTwenty12";
$dbname = "mikeWardenCommentsDB1";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO mikeWardenCommentsTable (Name, Comment, Contact)
VALUES ('$_POST[Name]', '$_POST[Comment]', '$_POST[Contact]')";

if (mysqli_query($conn, $sql)) {
    echo "Thanks for your response, I'll get back to you soon!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
</body>
</html>