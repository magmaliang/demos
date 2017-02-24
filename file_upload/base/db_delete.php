<?php 
	//建立联结
	$severname = "localhost";
	$username = "root";
	$psd = "abc";

	$con = new mysqli($severname,$username,$psd);
	if ($con->connect_error) {
		die("连接失败: " . $con->connect_error);
	}
	
	if ($con->query("DROP DATABASE bookManager") === TRUE) {
		$msg = "删除数据库成功!";
	}else{
		$msg = "删除失败:".$con->error;
	}
	
	$con->close();

	$result = array('msg' =>$msg);
	$strR = json_encode($result);
	header("Content-Type:application/json");

	echo $strR;
 ?>