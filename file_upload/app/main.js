import FileUpload from "./components/fileUpload";
import {render} from 'react-dom';
import React, {Component, PropTypes} from 'react'

var opt = {
	action:"./base/file_upload.php"
	// 
	,multiple:true
	// 
	,callback:function(data){console.log(data)}
	// use formdata or not, if not specified, coponent will figure based on exists of FormData.
	// this argu set mostly for test
	// ,useFormData: false
}

// stop default load localfile of browser
window.addEventListener("dragover",function(e){
  e = e || event;
  e.preventDefault();
}, false);
window.addEventListener("drop",function(e){
  e = e || event;
  e.preventDefault();
}, false);

render(
	<FileUpload {...opt} />, $(".container")[0]
	)
