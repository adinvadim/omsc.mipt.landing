<?php
	include_once __DIR__ . '/cell.php';

	$list = glob($config[ 'datapath' ] . '/log/*.txt');

	function getValues ($lines, $names)
	{
		$result = [ ];

		foreach ($names as $key => $name)
			$result[ $key ] = '';

		foreach ($lines as $line)
		{
			$data = explode(':', $line);
			if (count($data) == 2)
			{
				foreach ($names as $key => $name)
				{
					if ($name == $data[ 0 ])
					{
						$result[ $key ] = trim($data[ 1 ]);
						break;
					}
				}
			}
		}

		return $result;
	}

	$data = [ ];
	foreach ($list as $item)
	{
		$file = file($item, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

		$filename = pathinfo($item, PATHINFO_FILENAME);
		preg_match("/(\d{4})-(\d{2})-(\d{2})-(\d{2})-(\d{2})-(\d{2})/", $filename, $match);
		$dt = '';
		if (count($match) == 7)
			$dt = $match[ 1 ] . '-' . $match[ 2 ] . '-' . $match[ 3 ] . ' ' . $match[ 4 ] . ':' . $match[ 5 ] . ':' . $match[ 6 ];

		if (count($file) == 6)
		{
			$data_item = getValues($file, [
				'lastname'   => 'Фамилия',
				'firstname'  => 'Имя',
				'middlename' => 'Отчество',
				'email'      => 'Почта',
				'phone'      => 'Телефон',
				'birthdate'  => 'Дата рождения'
			]);
			$data[] = [
				$data_item[ 'lastname' ],
				$data_item[ 'firstname' ],
				$data_item[ 'middlename' ],
				$data_item[ 'email' ],
				$data_item[ 'phone' ],
				$data_item[ 'birthdate' ],
				'',
				$dt
			];
		}
		elseif (count($file) == 3)
		{
			$data_item = getValues($file, [
				'name'    => 'Имя',
				'email'   => 'Почта',
				'message' => 'Cообщение',
			]);
			$data[] = [
				'',
				$data_item[ 'name' ],
				'',
				$data_item[ 'email' ],
				'',
				'',
				$data_item[ 'message' ],
				$dt
			];
		}
	}

	$cell = new GoogleCell();
	//	$cell->insertData($data);