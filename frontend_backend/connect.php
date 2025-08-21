<?php
   $USERNAME = $_POST['USERNAME'];
   $EMAIL = $_POST['EMAIL'];
   $PASSWORD = $_POST['PASSWORD'];
   $ConfirmPassword = $_POST['Confirm_Password'];
   //Database Connection
   $conn = new mysqli('localhost',' ','mysql','musify')
   if($conn->connect_error){
     die('Connection failed':.$conn->connect_error)
   }
   else{
     $stmt=$conn->prepare("INSERT INTO musify(USERNAME,EMAIL,PASSWORD,Confirm_Password)VALUES(?,?,?,?)");
     $stmt->bind_param("ssss",$USERNAME,$EMAIL,$PASSWORD,$Confirm_Password);
     if($stmt->execute()){
     echo "Registration Successful";
     }
     else{
       echo "Error:".$stmt->error;
     }
     $stmt->close();
     $conn->close();
   }
?>