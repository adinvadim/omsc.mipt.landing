<?php
	include __DIR__ . '/vendor/autoload.php';
	$config = require __DIR__ . '/config.php';

	putenv('GOOGLE_APPLICATION_CREDENTIALS=' . $config[ 'google' ][ 'auth_json' ]);

	class GoogleCell
	{
		private $_spreadsheetID;
		private $_sheetName;
		private $_service;

		public function __construct ($spreadsheetID, $sheetName)
		{
			$this->_spreadsheetID = $spreadsheetID;
			$this->_sheetName = $sheetName;
		}

		/**
		 * @return Google_Service_Sheets_Resource_SpreadsheetsValues
		 */
		public function getService ()
		{
			if (!$this->_service)
			{
				$client = new Google_Client();
				$client->useApplicationDefaultCredentials();
				$client->addScope(Google_Service_Sheets::SPREADSHEETS);

				$this->_service = (new Google_Service_Sheets($client))->spreadsheets_values;
			}

			return $this->_service;
		}

		public function insertData ($data)
		{
			$rows = $this->getRowsCount() + 1;

			$values = new Google_Service_Sheets_ValueRange();
			$values->range = $this->_sheetName . '!A' . $rows;
			$values->majorDimension = 'ROWS';
			$values->values = $data;

			$service = $this->getService();

			$result = $service->update($this->_spreadsheetID, $values->range, $values, [ 'valueInputOption' => 'RAW' ]);
			if ($result instanceof Google_Service_Sheets_UpdateValuesResponse)
				if ($result->updatedRows == 1)
					return true;

			return false;
		}

		public function insertRow ($row)
		{
			$this->insertData([ $row ]);
		}

		private function getRowsCount ()
		{
			$service = $this->getService();
			$result = $service->get($this->_spreadsheetID, $this->_sheetName);
			if ($result instanceof Google_Service_Sheets_ValueRange)
				return count($result->values);

			return null;
		}
	}

	$cell = new GoogleCell($config[ 'google' ][ 'spreadsheet' ], $config[ 'google' ][ 'sheet' ]);