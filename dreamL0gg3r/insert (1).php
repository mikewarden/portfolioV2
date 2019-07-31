<!DOCTYPE>
<html>
<body>
 
 
<?php
$servername = "localhost";
$username = "dreamL0gAdmin";
$password = "JetSmileTwenty12";
$dbname = "DreamL0gg3rDB2";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO dreamL0gg3rTable (Recurring, Nightmare, Symbolic, Vivid, Bizzare, Paralysis, Lucid, Prophetic, Spiritual, name, shortDescription, fulldescription, significants, dateInputField)
VALUES ('$_POST[Recurring]', '$_POST[Nightmare]', '$_POST[Symbolic]', '$_POST[Vivid]', '$_POST[Bizzare]', '$_POST[Paralysis]', '$_POST[Lucid]', '$_POST[Prophetic]', '$_POST[Spiritual]', '$_POST[name]', '$_POST[shortDescription]', '$_POST[fulldescription]', '$_POST[significants]', '$_POST[dateInputField]')";

if (mysqli_query($conn, $sql)) {
    echo "Your dream has been stored and will be reviewed before it's added to the database, thanks!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
</body>
</html>