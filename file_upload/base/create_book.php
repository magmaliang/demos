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
	$id=$_POST["id"];$book_name=$_POST["book_name"];$author=$_POST["author"];

	$sql = 'INSERT INTO book'.
		  '(id,book_name,author) VALUES '.
		  '("'.$id.'","'.$book_name.'","'.$author.'")';

	if ($con->query($sql)===TRUE) {
		$msg = "插入数据成功";
	}else{
		$msg = "插入失败:".$con->error;
	}

	$con->close();

	$result = array('msg' =>$msg);
	$strR = json_encode($result);
	header("Content-Type:application/json");

	echo $strR;
 ?>