<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail -> CharSet = 'UTF-8';
$mail ->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail -> setForm('Mark.Zaharenko@yandex.ru', 'Илья Папич');
$mail -> addAddress('thrallxmas@gmail.com');
$mail -> Subject = 'Сосать, глотать и есть говно - вот три твоих стихии';

$body = '<h1>Вас приветствует компания "Алтек", пидорас</h1>';

if(trim(!empty($_POST['name']))) {
    $body.='<p>Имя хуесоса: '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['phone']))) {
    $body.='<p>Телефон хуесоса: '.$_POST['phone'].'</p>';
}

if(trim(!empty($_POST['email']))) {
    $body.='<p>Email хуесоса: '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['question']))) {
    $body.='<p>Хуесос задал вопрос: '.$_POST['question'].'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-Type: application/json');
echo json_encode($response);
?>