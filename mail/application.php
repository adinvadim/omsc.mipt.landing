<?php
	include __DIR__ . '/vendor/autoload.php';
	include __DIR__ . '/mail.php';
	$config = require __DIR__ . '/config.php';

	$result = 0;

	if (isAjax())
	{
		$email = param('email');
		$name = implode(' ', [ param('lastname'), param('firstname'), param('secondname') ]);
		$phone = param('phone');
		$birthdate = param('birthdate');
		$msg = param('message');

		if (isset( $_FILES[ 'file' ][ 'tmp_name' ] ) and $_FILES[ 'file' ][ 'error' ] == UPLOAD_ERR_OK)
		{
			$file = $config[ 'datapath' ] . '/files/' . generateFilename($name, $email) . '.' . pathinfo($_FILES[ 'file' ][ 'name' ], PATHINFO_EXTENSION);
			move_uploaded_file($_FILES[ 'file' ][ 'tmp_name' ], $file);
		}

		$fields = [
			'Имя'           => $name,
			'Почта'         => $email,
			'Телефон'       => $phone,
			'Дата рождения' => $birthdate,
			'Cообщение'     => $msg
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
		if (isset( $file ))
			$mailer->addAttachment($file);

		if ($mailer->send())
			$result = 1;

		$text = $mailer->AltBody;
		if (isset( $file ))
			$text .= "\n\nФайл: " . pathinfo($file, PATHINFO_BASENAME);

		saveToFile($config[ 'datapath' ] . '/log', $name, $email, $text);
	}

	echo $result;
	exit();