<?php 
	try {
		//建立联结
		$severname = "localhost";
		$username = "root";
		$psd = "abc";

		$con = new mysqli($severname,$username,$psd);
		if ($con->connect_error) {
			die("连接失败: " . $con->connect_error);
		}
		
		//读取所有数据库名
		$result = $con->query("show databases");
		$dbs = array();$i=0;

		if ($result->num_rows > 0) {
			while ($row = $result->fetch_assoc()) {
				$dbs[$i++] = $row["Database"];
			}
		}else{
			$dbs[0]="没有数据库！"; 
		}

		$con->close();
		header("Content-Type:application/json");

		echo json_encode($dbs);
	} catch (Exception $e) {
		echo 'Message: ' .$e->getMessage();
	}
	
 ?>