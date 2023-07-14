<?php
$to = "hugoherreracoach@gmail.com";
$subject = "Contacto para eventos de Hugo Herrera";

$name = $_POST["name"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$contactType = $_POST["contact-type"];
$city = $_POST["city"];
$telephone = $_POST["telephone"];
$message = $_POST["message"];


$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: <" . $email . ">" . "\r\n";


$body = "Información enviada desde el formulario:\n\n" .
"Nombre: $name\r\n" .
"Apellidos: $lastname\r\n" .
"Correo: $email\r\n" .
"Tipo de Contacto: $contactType\r\n" .
"Ciudad: $city\r\n" .
"Teléfono: $telephone\r\n" .
"Mensaje: $message\r\n";

if(mail($to,$subject,$body,$headers)){
    echo "El mensaje ha sido enviado";
}else{
    echo "Error al enviar el mensaje";
}