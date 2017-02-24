<?php 
	$book_name = $_POST["bookname"];
	$result = array('bookname' =>$book_name);
	$strR = json_encode($result);
	header("Content-Type:application/json");
	echo $strR;
 ?>