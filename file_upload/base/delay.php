<?php 
	$s = $_GET["s"];
	sleep($s);
	$msg = "delay ".$s." s ,".$_COOKIE['name'].$_COOKIE['gr_user_id'];
	$result = array('msg' =>$msg);
	$strR = json_encode($result);
	header("Content-Type:application/json");

	echo $strR;
 ?>