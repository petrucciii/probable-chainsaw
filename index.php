<!doctype html>
<html lang="it">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Sito Ufficiale della pensione per cani: 'L'Impero di Apollo.'">
    <meta name="keywords" content="">
	<link rel="shortcut icon" href="./views/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="views/css/style.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>L'Impero di Apollo</title>
</head>
<body>
    <?php
        include './views/index.html';
		include 'mail.php';
		
		/*if(isset($_POST['send_mail'])){
			send_mail('riccardo.petrucci99@gmail.com', $_POST['subject_mail'], $_POST['message_mail'], 'E-mail inviata da: '. $_POST['email-mail'].', '. $_POST['name-mail']);
		}*/
    ?>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</body>
</html>