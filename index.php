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
    <link rel="stylesheet" href="views/css/mobile.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>L'Impero di Apollo</title>
</head>
<body>
    <?php
        include './views/index.html';
		include 'mail.php';
		
		if(isset($_POST['send_mail'])){
			send_mail('riccardo.petrucci99@gmail.com', $_POST['subject_mail'], $_POST['message_mail'], 'E-mail inviata da: '. $_POST['email-mail'].', '. $_POST['name-mail']);
		}
    ?>
    <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
    <script src="./views/js/app.js"></script>
</body>
</html>