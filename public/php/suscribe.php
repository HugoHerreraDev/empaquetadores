<?php
$to = "hugoherreracoach@gmail.com";
$subject = "Suscripción a Noticias de Hugo Herrera";

$email = $_POST["email"];

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: <" . $email . ">" . "\r\n";

$body = "Hola, me gustaría obtener más noticias de ti, mi correo es: $email";

if(mail($to,$subject,$body,$headers)){
    echo "El mensaje ha sido enviado";
}else{
    echo "Error al enviar el mensaje";
}