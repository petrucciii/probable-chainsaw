<?php
	function send_mail($reciver, $subject, $message, $headers){
		mail($reciver, $subject, $message, $headers);
	}
 ?>