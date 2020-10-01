<?php

if(isset($_POST['submit'])){
    $to = "pserembae@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $user_name = $_POST['user_name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $user_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $user_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $user_name . ", we will contact you shortly.";
    
    }
?>