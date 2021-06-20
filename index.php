<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Sito Ufficiale di">
    <meta name="keywords" content="">
    <link rel="stylesheet" href="views/css/style.css">
    <title></title>
</head>
<body>
    <?php
        include './views/index.html';
		include 'mail.php';
		
		/*if(isset($_POST['send_mail'])){
			send_mail('riccardo.petrucci99@gmail.com', $_POST['subject_mail'], $_POST['message_mail'], 'E-mail inviata da: '. $_POST['email-mail'].', '. $_POST['name-mail']);
		}*/
    ?>
</body>
</html>