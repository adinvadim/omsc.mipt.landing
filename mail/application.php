<?php
	include __DIR__ . '/vendor/autoload.php';
	include __DIR__ . '/mail.php';
	$config = require __DIR__ . '/config.php';

	$result = 0;

	if (isAjax())
	{
		$email = param('email');
		$lastname = param('lastname');
		$firstname = param('firstname');
		$secondname = param('secondname');
		$name = implode(' ', [ $lastname, $firstname, $secondname ]);
		$phone = param('phone');
		$birthdate = param('birthdate');

		if (isset( $_FILES[ 'file' ][ 'tmp_name' ] ) and $_FILES[ 'file' ][ 'error' ] == UPLOAD_ERR_OK)
		{
			$file = $config[ 'datapath' ] . '/files/' . generateFilename($name, $email) . '.' . pathinfo($_FILES[ 'file' ][ 'name' ], PATHINFO_EXTENSION);
			move_uploaded_file($_FILES[ 'file' ][ 'tmp_name' ], $file);
		}

		$fields = [
			'Фамилия'       => $lastname,
			'Имя'           => $firstname,
			'Отчество'      => $secondname,
			'Почта'         => $email,
			'Телефон'       => $phone,
			'Дата рождения' => $birthdate,
		];

		$mailer = new PHPMailer();
		$mailer->CharSet = 'UTF-8';
		$mailer->setFrom($email, $name);
		foreach ($config[ 'to' ] as $address)
			$mailer->addAddress($address);
		$mailer->addReplyTo($email, $name);
		$mailer->isHTML(true);
		$mailer->Subject = 'Заявка на участие в конкурсе OMSC';
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

		// Send mail to user.
		$umailer = new PHPMailer();
		$umailer->CharSet = 'UTF-8';
		$umailer->setFrom('omsc@phystech.edu', 'онлайн-магистратура МФТИ');
		$umailer->addAddress($email, $name);
		$umailer->isHTML(true);
		$umailer->Subject = 'Порядок поступления';
		$umailer->Body = <<<EOT
<p>Здравствуйте, $name!</p>
<p>Мы благодарим вас за интерес, проявленный к онлайн-магистратуре. Чтобы принять участие в конкурсе при поступлении на программу "Совеременная комбинаторика", 
вам необходимо подать свои документы в МФТИ согласно установленному регламенту.</p> 
<p>Ниже приведена информация, которая поможет вам в этом.</p> 
<ol>
<li>При подаче <a href="https://pk.mipt.ru/apply/">электронного заявления в МФТИ</a> введите следующую инфрмацию:
<ul>
<li>Конкрусная группа: прикладная математика и информатика 01.04.02.</li> 
<li>Условие поступления: контрактное обучение.</li>
<li>Факультет: ЦИОТ.</li>
<li>Кафедра дискретной математики.</li>
<li>Магистерская программа: Современная комбинаторика.</li>
<li>Заполните информацию о себе, выберите способ подачи документов.</li>
</ul>
</li>
<li>Если вы хотите подать заявку на финансовую помощь для оплаты обучения, вам необходимо заполнить <a href="https://www.surveymonkey.com/r/omscmipt">следующую форму</a>.</li>
<li>Согласно правилам поступления в <a href="https://pk.mipt.ru/master/2016/">магистратуру МФТИ</a> вам необходимо сдать вступительные испытания по математике и информатике. 
Вы можете ознакомиться с <a href="https://pk.mipt.ru/master/timetable/">графиком вступительных испытаний</a>. 
Вступительные испытания по математике проводятся во вторник, по информатике - в четверг. Подробную информацию о вступительных испытаниях вы получите в следующем письме. 
А пока предлагаем вам посмотреть <a href="https://www.youtube.com/watch?v=yG4DjTw9Ogw">консультацию по математике</a> для поступающих в магистратуру МФТИ.
</li>
</ol>
<p>При возникновении вопросов свяжитесь с нами по телефону <span class="white-space: nowrap;">+7(499) 110-67-03</span>, либо отправьте письмо на нашу почту <a href="mailto:omsc@phystech.edu">omsc@phystech.edu</a>.<p> 
<hr>
<p>С уважением, онлайн-магистратура МФТИ</p>
EOT;
		$umailer->AltBody = <<<EOT
Здравствуйте, $name!

Мы благодарим вас за интерес, проявленный к онлайн-магистратуре. Чтобы принять участие в конкурсе при поступлении на программу "Совеременная комбинаторика", 
вам необходимо подать свои документы в МФТИ согласно установленному регламенту. 

Ниже приведена информация, которая поможет вам в этом. 

1. При подаче электронного заявления в МФТИ (https://pk.mipt.ru/apply/) введите следующую инфрмацию:

- Конкрусная группа: прикладная математика и информатика 01.04.02. 
- Условие поступления: контрактное обучение.
- Факультет: ЦИОТ.
- Кафедра дискретной математики.
- Магистерская программа: Современная комбинаторика.
- Заполните информацию о себе, выберите способ подачи документов. 

2. Если вы хотите подать заявку на финансовую помощь для оплаты обучения, вам необходимо заполнить следующую форму https://www.surveymonkey.com/r/omscmipt.

3. Согласно правилам поступления в магистратуру МФТИ (https://pk.mipt.ru/master/2016/) вам необходимо сдать вступительные испытания по математике и информатике. 
Вы можете ознакомиться с графиком вступительных испытаний (https://pk.mipt.ru/master/timetable/). 
Вступительные испытания по математике проводятся во вторник, по информатике - в четверг. Подробную информацию о вступительных испытаниях вы получите в следующем письме. 
А пока предлагаем вам посмотреть конусльтацию по математике для поступающих в магистратуру МФТИ (https://www.youtube.com/watch?v=yG4DjTw9Ogw).

При возникновении вопросов свяжитесь с нами по телефону +7(499) 110-67-03, либо отправьте письмо на нашу почту omsc@phystech.edu. 

---

С уважением, онлайн-магистратура МФТИ
EOT;
		$umailer->send();
	}

	echo $result;
	exit();