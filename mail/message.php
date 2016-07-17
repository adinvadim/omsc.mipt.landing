<?php
	include __DIR__ . '/vendor/autoload.php';
	include __DIR__ . '/mail.php';
	$config = require __DIR__ . '/config.php';
	include __DIR__ . '/cell.php';

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
		// $mailer->isSMTP();
		// $mailer->SMTPAuth = false;
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

		$cell = new GoogleCell();
		$cell->insertRow([
			'',
			$name,
			'',
			$email,
			'',
			'',
			$msg,
			date('Y-m-d H:i:s')
		]);
	}

	echo $result;
	exit();
