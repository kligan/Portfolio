<?php
//email settings
ini_set('SMTP','send.one.com');
ini_set('smtp_port','465');
//ini_set('verify_peer','false');
 
// check if fields passed are empty
if(empty($_POST['name'])   ||
   // empty($_POST['phone']) ||
   empty($_POST['email']) ||
   empty($_POST['subject']) ||
   empty($_POST['message']) ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
echo "No arguments Provided!";
return false;
   }
 
$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
 
// create email body and send it
$to = 'info@kliganbraganza.co.uk'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "Website email from:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$email_body = "You have received a new message from your website's contact form.\n\n"."Here are the details:\n\nName: $name\n\nPhone: $phone\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: info@louisemcdonald.info\n";
$headers .= "Reply-To: $email_address";
mail($to,$subject,$email_body,$headers);
return true;
?>


<?php

   if (isset($_POST['submit'])) {
$name = $_POST['name'];
$mailFrom = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailTo = 'kliganbraganza@gmail.com'; // PUT YOUR EMAIL ADDRESS HERE
$headers = "From: ".$mailFrom;
$txt = "You have received an e-mail from ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
header("Location: index.html?mailsend");
   }

