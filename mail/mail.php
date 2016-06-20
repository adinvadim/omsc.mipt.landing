<?php
	function isAjax ()
	{
		$headers = getallheaders();

		return isset( $headers[ 'HTTP_X_REQUESTED_WITH' ] ) &&
		( strtolower($headers[ 'HTTP_X_REQUESTED_WITH' ]) == 'xmlhttprequest' );
	}

	function param ($name)
	{
		if (isset( $_POST[ $name ] ))
			return $_POST[ $name ];
//		if (isset( $_GET[ $name ] ))
//			return $_GET[ $name ];

		return null;
	}

	function getBody ($fields)
	{
		$text = '<ul>';
		foreach ($fields as $title => $value)
		{
			$text .= '<li><strong>' . $title . '</strong>: ' . $value . '</li>';
		}
		$text .= '</ul>';

		return $text;
	}

	function getAltBody ($fields)
	{
		$text = '';
		foreach ($fields as $title => $value)
			$text .= $title . ': ' . $value . "\n\n";

		return $text;
	}

	function transliterate ($textcyr)
	{
		$cyr = [
			'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я',
			'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я' ];
		$lat = [
			'a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'ts', 'ch', 'sh', 'sch', '', 'y', '', 'e', 'yu', 'ya',
			'A', 'B', 'V', 'G', 'D', 'E', 'Yo', 'Zh', 'z', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'H', 'Ts', 'Ch', 'Sh', 'Sch', '', 'Y', '', 'E', 'Yu', 'Ya' ];

		return str_replace($cyr, $lat, $textcyr);
	}

	function generateFilename ($name, $email)
	{
		$name = transliterate($name);
		$name = preg_replace("/[^A-Za-z0-9_]/", '', $name);
		$email = str_replace('@', '_at_', $email);
		$email = preg_replace("/[^A-Za-z0-9_]/", '', $email);

		return date('Y-m-d-H-i-s') . '_' . $name . '_' . $email;
	}

	function saveToFile ($dirpath, $name, $email, $message)
	{

		@file_put_contents($dirpath . '/' . generateFilename($name, $email) . '.txt', $message);
	}