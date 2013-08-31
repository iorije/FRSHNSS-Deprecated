<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Breakcre8ionz - Mailer</title>
<link href="css/main_hall.css" rel="stylesheet" type="text/css" />
</head>

<body>
<div id="container">
	<div id="header">
    	<!--HEADER IMG-->
    </div>
    <div id="main">
<?php
    $version = $_POST['version'];
    $naam = $_POST['naam'];
    $voornaam = $_POST['voornaam'];
    $straat = $_POST['straat'];
    $huisnummer = $_POST['huisnummer'];
    $postcode = $_POST['postcode'];
    $gemeente = $_POST['gemeente'];
    $geboortedatum = $_POST['geboortedatum'];
    $provincie = $_POST['provincie'];
    $telefoon = $_POST['telefoon'];
    $email = $_POST['email'];
    $factuuradres = $_POST['factuuradres'];
    $opmerking = $_POST['opmerking'];

    $mailto = "isai.orye@gmail.com";
    $mailFrom = "info@frshnss.be";
    $subject = "test";
    $from = "From: $email";
    $from2 = "From: $mailFrom";

    $message = "Inschrijving: $version\n
    Naam: $naam\n
    Voornaam: $voornaam\n
    Straat: $straat\n
    Huisnummer: $huisnummer\n
    Postcode: $postcode\n
    Gemeente: $gemeente\n
    Geboortedatum: $geboortedatum\n
    Provincie: $provincie\n
    Telefoon: $telefoon\n
    Email: $email\n
    Factuuradres: $factuuradres\n
    Opmerking: $opmerking\n
    ";

    $message2 = "Beste $voornaam $naam,
    uw inschrijving wordt verwerkt door danskant vzw welke U de nodige betalingsdocumenten zal doorsturen. Uw inschrijving is pas geldig na betaling.<br />

    Groeten,
    Het BC-Team

    Filip Gombeer
    Bredestraat 145
    3293 Diest
    België
    + (00) 32 474 72 53 94
    info@breakcre8ionz.com
    www.breakcre8ionz.com
    
    Danskant vzw
    Ed.Robeynslaan 29a
    3290 Diest
    België
    013 32 76 13
    info@danskant.be
    www.danskant.be";

    mail($mailto, $subject, $message, $from);
    mail($email, $subject, $message2, $from2);

    echo "Je inschrijving is goed verstuurd.<br />Je krijgt een email met verdere instructies.";
?>
    </div>
</div>
</body>
</html>




<? 
    //change this to your email. 
    $to = "m@maaking.com"; 
    $from = "m2@maaking.com"; 
    $subject = "Hello! This is HTML email"; 

    //begin of HTML message 
    $message = "<html> 
  <body bgcolor=\"#DCEEFC\"> 
    <center> 
        <b>Looool!!! I am reciving HTML email......</b> <br> 
        <font color=\"red\">Thanks Mohammed!</font> <br> 
        <a href=\"http://www.maaking.com/\">* maaking.com</a> 
    </center> 
      <br><br>*** Now you Can send HTML Email <br> Regards<br>MOhammed Ahmed - Palestine 
  </body> 
</html>"; 
   //end of message 

    // To send the HTML mail we need to set the Content-type header. 
    $headers = "MIME-Version: 1.0rn"; 
    $headers .= "Content-type: text/html; charset=iso-8859-1rn"; 
    $headers  .= "From: $from\r\n"; 
    //options to send to cc+bcc 
    //$headers .= "Cc: [email]maa@p-i-s.cXom[/email]"; 
    //$headers .= "Bcc: [email]email@maaking.cXom[/email]"; 
     
    // now lets send the email. 
    mail($to, $subject, $message, $headers); 

    echo "Message has been sent....!"; 
?>