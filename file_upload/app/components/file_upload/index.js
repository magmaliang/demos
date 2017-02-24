import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom';

class FileUpload extends Component{
	constructor(props){
		super(props);
	}

	uploadFiles=(ev)=>{
		let files = ev.target.files;
		if (window.FormData) {
			this.formDataUpload(files);
		}else{
			this.ajaxUpload(files);
		}
		
	}

	ajaxUpload(files){

	}

	formDataUpload(files){
		var len = files.length;
		while(len--){
			var formData = new FormData();
			formData.append("file",files[len]);

			var xhr = new XMLHttpRequest();
			xhr.open("POST",this.props.action);
			xhr.onload = this.props.callback;
			xhr.send(formData);
		}
	}

	render(){
		var argus = {
			onChange :this.uploadFiles
		};
		if (this.props.multiple) {
			argus.multiple = true;
		}
		return <input type="file" name="file" {...argus} />
	}
}


var _file_uploaded=  function(options){
	//参数结构
	// options:{
	// 	action:""
	// 	,callback:[function]
	// }
	function uploadFiles(){
		var files = this.files,len = this.files.length;
		while(len--){
			var formData = new FormData();
			formData.append("file",this.files[len]);

			var xhr = new XMLHttpRequest();
			xhr.open("POST",options.action);
			xhr.onload = options.callback;
			xhr.send(formData);
		}
		
	}

	var _input = document.createElement("input");
	_input.setAttribute("type","file");
	_input.setAttribute("name","file");
	if (options.multiple) {
		_input.setAttribute("multiple","multiple");
	}

	_input.addEventListener("change",uploadFiles);
	//1.支持FormData
	if (FormData&& typeof FormData == "function") {
		return _input;
	}

	//2.不支持FormData，使用form ajax
	var _form = document.createElement("form");
	_form.setAttribute("target","_iframe");
	_form.setAttribute("method","post");
	_form.setAttribute("enctype","multipart/form-data");
	_form.setAttribute("action",options.action+"?callback=_file_uploaded_callback");

	_form.addEventListener("submit",function(){
		var _iframe = document.createElement("iframe");
		_iframe.name="_iframe";

		_form.appendChild(_iframe);
	})

	//上传成功的回调
	window._file_uploaded_callback = function(data){
		_form.querySelector("[name='_iframe']").remove();
		options.callback(data);
	}

	

	var _submit = document.createElement("input");
	_submit.setAttribute("type","submit");
	_submit.setAttribute("name","submit");
	_submit.setAttribute("value","上传");

	_form.appendChild(_input);
	_form.appendChild(_submit);

	return _form;
	
}

export default FileUpload;