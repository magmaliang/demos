import FileUpload from "./components/file_upload";
import {render} from 'react-dom';
import React, {Component, PropTypes} from 'react'

var opt = {
	action:"./base/file_upload.php"
	,multiple:true
	,callback:function(data){console.log(data)}
}

// stop default load localfile of browser
window.addEventListener("dragover",function(e){
  e = e || event;
  e.preventDefault();
},false);
window.addEventListener("drop",function(e){
  e = e || event;
  e.preventDefault();
},false);

render(
	<FileUpload {...opt} />, $(".container")[0]
	)
