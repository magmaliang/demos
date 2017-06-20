<?php
$data = "fail";
$callback = $_GET["callback"];

if ($_FILES["file"]["error"] > 0){
     $data = $_FILES["file"]["error"];
}else{
    $folderReady = true;
    if (!file_exists("../file/")) {
        $folderReady = mkdir("../file/");
    }
    if (!$folderReady) {
        $data = 'container folder dose not exist!';
    } else {
        if (file_exists("../file/" . $_FILES["file"]["name"])){
            $data = $_FILES["file"]["name"] . " already exists. ";
        }else{
            $data = "done";
            move_uploaded_file($_FILES["file"]["tmp_name"],"../file/" . $_FILES["file"]["name"]);
        }
    }
    
}
$data = array('msg' =>$data);
$data = json_encode($data);

if ($callback=="") {
    header("Content-Type:application/json");
    echo $data;
}else{
    echo "<script>window.parent.".$callback."(".$data.")</script>";
}


?>