<?php
	include __DIR__ . '/mail.php';

	$result = 0;

	if (isAjax())
	{
		$mail = new Mail();
		$mail->addField('name', 'Имя');
		$mail->addField('email', 'Почта');
		$mail->addField('message', 'Сообщение');
		if ($mail->send('Сообщение с OMSC'))
			$result = 1;
	}
	echo $result;
	exit();