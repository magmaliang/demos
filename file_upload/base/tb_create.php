<?php 
	//建立联结
	$severname = "localhost";
	$username = "root";
	$psd = "abc";

	$con = new mysqli($severname,$username,$psd);
	if ($con->connect_error) {
		die("连接失败: " . $con->connect_error);
	}
	//选择目标数据库
	$con->select_db("bookManager");

	//创建book 表
	$sql = 'CREATE TABLE book'.
		  '(id VARCHAR(20),'.
		  'book_name VARCHAR(20),'.
		  'author VARCHAR(20),'.
		  'is_borrowed CHAR(1))';

	if ($con->query($sql)===TRUE) {
		$msg = "创建book表成功";
	}else{
		$msg = "创建失败:".$con->error;
	}

	$con->close();

	$result = array('msg' =>$msg);
	$strR = json_encode($result);
	header("Content-Type:application/json");

	echo $strR;
 ?>