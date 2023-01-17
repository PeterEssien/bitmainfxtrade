<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect("i5k.h.filess.io","GeorgeUpgradedDB_beginning","fba073b5c05f18c4a45461fff9ba05e224602f74","GeorgeUpgradedDB_beginning");

// get the post records
$fullName = $_POST['name'];
$homeAddress = $_POST['address'];
$phoneNumber = $_POST['phonenumber'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$bankName = $_POST['bankname'];
$accountNumber = $_POST['accountnumber'];
$nationality = $_POST['nationality'];
$state = $_POST['state'];
$routingNumber = $_POST['routingNumber'];

// database insert SQL code
$sql = "INSERT INTO `db_contact` (`Id`, `fullName`, `homeAddress`, `phoneNumber`, `gender`, `email`, `bankName`, `accountNumber`, `nationality`, `state`, `routingNumber`) VALUES ('0', '$fullName', '$homeAddress', '$phoneNumber', '$gender', '$email', '$bankName', '$accountNumber', '$nationality', '$state', '$routingNumber')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
 echo "Membership form submitted! An email would be sent to you shortly with further details.";
}

?>
