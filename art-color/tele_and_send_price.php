<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$order = $_POST['order'];


$token ="577537053:AAFkjkBlfH5OMRxoFSJ25XL--SfHHiSUl9k";
$chat_id ="-378178700";
$arr = array(
	'Имя: ' => $name,
	'Телефон: ' => $phone,
    'Email: ' => $email,
	'Цель: ' => $order,
);



foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};


mail("art-color@i.ua", "Новая заявка с сайта Art-Color", " Имя: ".$name.". \n Телефон: ".$phone.". \n Цель: ".$order, "\r\n");

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$file = "./files/offer.pdf"; // файл
$mailTo = $_POST['email']; // кому
$from = "Art-color"; // от кого
$subject = "Прайс-лист от Art-color"; // тема письма
$message = "Предоставляем прайс-лист от Art-color.<br/>
  <br/>
 С уважением, Art-color! <br/>
Tel: +(380) 66 805 7770<br/>
mail: art-color@i.ua<br/>
http://art-color.org/"; // текст письма
$r = sendMailAttachment($mailTo, $from, $subject, $message, $file); // отправка письма c вложением
echo ($r)?'Письмо отправлено':'Ошибка. Письмо не отправлено!';
//$r = sendMailAttachment($mailTo, $from, $subject, $message); // отправка письма без вложения
//echo ($r)?'Письмо отправлено':'Ошибка. Письмо не отправлено!';

function sendMailAttachment($mailTo, $from, $subject, $message, $file = false){
    $separator = "---"; // разделитель в письме
    // Заголовки для письма
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: $from\nReply-To: $from\n"; // задаем от кого письмо
    $headers .= "Content-Type: multipart/mixed; boundary=\"$separator\""; // в заголовке указываем разделитель
    // если письмо с вложением
    if($file){
        $bodyMail = "--$separator\n"; // начало тела письма, выводим разделитель
        $bodyMail .= "Content-type: text/html; charset='utf-8'\n"; // кодировка письма
        $bodyMail .= "Content-Transfer-Encoding: quoted-printable"; // задаем конвертацию письма
        $bodyMail .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode(basename($file))."?=\n\n"; // задаем название файла
        $bodyMail .= $message."\n"; // добавляем текст письма
        $bodyMail .= "--$separator\n";
        $fileRead = fopen($file, "r"); // открываем файл
        $contentFile = fread($fileRead, filesize($file)); // считываем его до конца
        fclose($fileRead); // закрываем файл
        $bodyMail .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode(basename($file))."?=\n"; 
        $bodyMail .= "Content-Transfer-Encoding: base64\n"; // кодировка файла
        $bodyMail .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode(basename($file))."?=\n\n";
        $bodyMail .= chunk_split(base64_encode($contentFile))."\n"; // кодируем и прикрепляем файл
        $bodyMail .= "--".$separator ."--\n";
    // письмо без вложения
    }else{
        $bodyMail = $message;
    }
    $result = mail($mailTo, $subject, $bodyMail, $headers); // отправка письма
    return $result;
}

?> 

