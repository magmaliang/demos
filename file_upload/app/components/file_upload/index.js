import React, {Component} from 'react'
import {render} from 'react-dom';

require("./index.scss")

class FileUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dragover: false,
			files: []
		}

		this.hiddenInput = this.createInput();
	}

	uploadFiles = (ev) => {
		let files = this.state.files;
		if (window.FormData) {
			this.formDataUpload(files);
		} else {
			this.ajaxUpload(files);
		}

	}

	ajaxUpload(files) {
		this.form.submit();
		this.form.reset();
	}

	formDataUpload(files) {
		var len = files.length;
		while (len--) {
			var formData = new FormData();
			formData.append("file", files[len]);

			var xhr = new XMLHttpRequest();
			xhr.open("POST", this.props.action);
			xhr.onload = this.props.callback;
			xhr.send(formData);
		}
	}

	render() {
		return <div className={'file_upload' + (this.state.dragover?' dragover':"") }
			onClick={this.clickUploadZone}
			onDragOver={this.dragover}
			onDragLeave={this.dragleave}
			onDrop={this.drop}
			>
				<p className='tip'>点击，或者拖拽文件到此区域上传。</p>
				{this.hiddenInput}

		</div>
		
	}

	dragover = (e) => {
		this.setState({"dragover" : true});
	}

	dragleave = (e) => {
		this.setState({"dragover" : false});
	}

	drop = (e) => {
		// read files
		this.setState({files: e.dataTransfer.files});
		this.setState({"dragover" : false}, this.uploadFiles);
	}

	clickUploadZone = () => {
		this.fileinput.click();
	}

	createInput() {
		var argus = {
			onChange: (e) => {
				this.setState({files: e.target.files}, this.uploadFiles);
			}
		};
		if (this.props.multiple) {
			argus.multiple = true;
		}

		//上传成功的回调
		window._file_uploaded_callback = (data) => {
			// this.form.querySelector("[name='_iframe']").remove();
			this.props.callback(data);
		}

		var hiddenStyle = {visibility:'hidden',width: 0, position:'fixed', top: '-1000px'};

		return <form method='post'
				ref={(form) => {this.form = form;}}
				encType='multipart/form-data'
				action={this.props.action + "?callback=_file_uploaded_callback"}
				target='_iframe'
			> 
				<input 
				ref={(input) => {this.fileinput = input;}} 
				style={hiddenStyle} 
				type = "file" 
				name = "file" 
				{...argus} />

				<iframe name='_iframe' style={hiddenStyle} />
			</form>
	}


}

export default FileUpload;