<?php
	include __DIR__ . '/vendor/autoload.php';
	include __DIR__ . '/mail.php';
	$config = require __DIR__ . '/config.php';

	$result = 0;

	if (isAjax())
	{
		$email = param('email');
		$name = param('name');
		$msg = param('message');

		$fields = [
			'Имя'       => $name,
			'Почта'     => $email,
			'Cообщение' => $msg
		];

		$mailer = new PHPMailer();
		$mailer->CharSet = 'UTF-8';
		$mailer->setFrom($email, $name);
		foreach ($config[ 'to' ] as $address)
			$mailer->addAddress($address);
		$mailer->addReplyTo($email, $name);
		$mailer->isHTML(true);
		$mailer->Subject = 'Сообщение из OMSC';
		$mailer->Body = getBody($fields);
		$mailer->AltBody = getAltBody($fields);

		if ($mailer->send())
			$result = 1;

		saveToFile($config[ 'datapath' ] . '/log', $name, $email, $mailer->AltBody);
	}

	echo $result;
	exit();