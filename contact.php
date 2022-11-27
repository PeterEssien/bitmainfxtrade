<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('sql8.freemysqlhosting.net', 'sql8581294', 'fZEY5Xbjvt','db_ sql8581294');

// get the post records
$fullName = $_POST['fullName'];
$txtEmail = $_POST['txtEmail'];
$txtPhone = $_POST['txtPhone'];
$txtMessage = $_POST['txtMessage'];

// database insert SQL code
$sql = "INSERT INTO `tbl_contact` (`Id`, `fldName`, `fldEmail`, `fldPhone`, `fldMessage`) VALUES ('0', '$txtName', '$txtEmail', '$txtPhone', '$txtMessage')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
 echo "Membership form submitted! An email would be sent to you shortly with further details.";
}

?>
