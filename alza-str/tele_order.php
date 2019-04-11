<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$order = $_POST['order'];



$token ="690922285:AAFmVwzscOxM-ATsa9RFjOoAzlh9_ijOZLQ";
$chat_id ="-386178406";
$arr = array(
	'Имя: ' => $name,
	'Телефон: ' => $phone,
	'Цель: ' => $order,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>

