<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$order = $_POST['order'];



$token ="577537053:AAFkjkBlfH5OMRxoFSJ25XL--SfHHiSUl9k";
$chat_id ="-378178700";
$arr = array(
	'Имя: ' => $name,
	'Телефон: ' => $phone,
	'Цель: ' => $order,
);



foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

mail("art-color@i.ua", "Новая заявка с сайта Art-Color", " Имя: ".$name.". \n Телефон: ".$phone.". \n Цель: ".$order, "\r\n");

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>

