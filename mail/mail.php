<?php

	// @see http://stackoverflow.com/a/31428803/944606

	class Mail
	{
		private $_eol     = "\r\n";
		private $_fields  = [ ];
		private $_file;
		private $_filename;
		private $_from;
		private $_headers = [ ];
		private $_message = [ ];
		private $_reply;
		private $_to      = 'witzawitz@gmail.com';
		private $_uid;

		public function __construct ()
		{
			// A random hash will be necessary to send mixed content.
			$this->_uid = md5(uniqid(time()));
		}

		public function addField ($name, $title)
		{
			$value = param($name);

			if ($name == 'email')
			{
				$this->_from = $value;
				$this->_reply = $value;
			}

			if ($name == 'file')
			{
				if ($_FILES[ 'file' ][ 'error' ] == UPLOAD_ERR_OK)
				{
					$this->_file = $this->getFileContent($_FILES[ 'file' ][ 'tmp_name' ]);
					$this->_filename = 'Application.' . pathinfo($_FILES[ 'file' ][ 'name' ], PATHINFO_EXTENSION);
				}
			}
			else
				$this->_fields[ $title ] = $value;
		}

		public function send ($subject)
		{
			$headers = implode($this->_eol, $this->getHeaders()) . $this->_eol;
			$message = implode($this->_eol, $this->getMessage());

			return mail($this->_to, $subject, $message, $headers);
		}

		private function getFileContent ($path)
		{
			if (file_exists($path) and is_readable($path))
			{
				$size = filesize($path);
				$handle = fopen($path, 'r');
				$content = fread($handle, $size);
				fclose($handle);

				return chunk_split(base64_encode($content));
			}

			return null;
		}

		private function getHeaders ()
		{
			$this->_headers[] = 'From: ' . $this->_from;
			$this->_headers[] = 'Reply-To: ' . $this->_reply;
			$this->_headers[] = 'MIME-Version: 1.0';
			if ($this->_file)
				$this->_headers[] = 'Content-Type: multipart/mixed; boundary="' . $this->_uid . '"';

			return $this->_headers;
		}

		private function getMessage ()
		{
			$this->_message[] = '--' . $this->_uid;
			$this->_message[] = 'Content-type:text/plain; charset=iso-8859-1';
			$this->_message[] = 'Content-Transfer-Encoding: 7bit';
			$this->_message[] = $this->getMessageText();

			if ($this->_file)
			{
				$this->_message[] = '--' . $this->_uid;
				$this->_message[] = 'Content-Transfer-Encoding: base64';
				$this->_message[] = 'Content-Type: application/octet-stream; name="' . $this->_file . '"';
				$this->_message[] = 'Content-Disposition: attachment; filename="' . $this->_file . '"';
				$this->_message[] = $this->_file;
				$this->_message[] = '--' . $this->_uid . '--';
			}

			return $this->_message;
		}

		private function getMessageText ()
		{
			$text = '<html><body><ul>';
			foreach ($this->_fields as $title => $value)
				$text .= '<li><strong>' . $title . '</strong>: ' . $value . '</li>';
			$text .= '</ul></body></html>';

			return $text;
		}
	}

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