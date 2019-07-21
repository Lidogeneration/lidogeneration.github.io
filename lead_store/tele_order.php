<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$order = $_POST['order'];

mail("generationleadorder@gmail.com", "Новая заявка с сайта GenerationLeadStudio", " Имя: ".$name.". \n Телефон: ".$phone.". \n Email: ".$email, "\r\n");


$token ="673296501:AAGqaJFWTX9R6Q86DxjbLbMV__1T8OaY7Rc";
$chat_id ="-271936991";
$arr = array(
	'Имя: ' => $name,
	'Телефон: ' => $phone,
	'Сообщение: ' => $message,
	'Цель' => $order
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>

