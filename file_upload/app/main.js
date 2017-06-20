import FileUpload from "./components/file_upload";
import {render} from 'react-dom';
import React, {Component, PropTypes} from 'react'

var opt = {
	action:"./base/file_upload.php"
	,multiple:true
	,callback:function(data){console.log(data)}
}


render(
	<FileUpload {...opt} />, $(".container")[0]
	)
