<?php
// Файлы phpmailer
require 'src/phpmailer/PHPMailer.php';
require 'src/phpmailer/SMTP.php';
require 'src/phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];

// Формирование самого письма
$title = "New Feedback Best Tour Plan";
$body = "
<h2>New Subscribe</h2>
<b>Name:</b><br>$name
<b>email:</b><br>$email
";

if ($name and $email) {
  $title = "New Subscribe Ehya";
  $body = "
    <h2>New subscribe</h2>
    <b>email:</b> $email<br><br>
    <b>Name:</b><br>$name
  ";
} elseif ($email) {
  $title = "New Subscribe Ehya";
  $body = "
    <h2>New subscribe</h2>
    <b>Message:</b><br>$email
  ";
} 

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'mediocritytry@gmail.com'; // Логин на почте
    $mail->Password   = 'pmxj$lfVP'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mediocritytry@gmail.com', 'Егор Матвеев'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('egormsm@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    


// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: index.html');   