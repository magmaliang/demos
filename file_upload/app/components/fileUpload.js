import React ,{Component} from 'react'
import {render} from 'react-dom';

import Previewer from './filePreviewer';

require("./main.scss");

class FileUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dragover: false,
			files: [],
			filesManager: [],
			useFormData: typeof props.useFormData!== 'undefined' ? props.useFormData : window.FormData ? true : false,
			tip: 'click or drop files here to upload.'
		}

		if (!this.state.useFormData) {
			this.state.tip = 'click here to upload.';
		}

		this.hiddenInput = this.createInput();
	}

	uploadFiles = () => {
		let files = this.state.files;

		if (this.state.useFormData) {
			this.state.filesManager.forEach( obj => {
				obj.xhr && obj.xhr.send(obj.formData);
			})
		} else {
			this.form.submit();
			this.form.reset();
		}

	}

	createFilesObject  = () => {
		let files = this.state.files;
		this.state.filesManager.length = 0;

		Array.from(files).forEach((file,index) => {
			var obj = {};
			obj.name = file.name;
			obj.ratio = 0;
			if (this.props.useFormData) {
				obj.formData = new FormData();
				obj.formData.append("file", file);
				obj.xhr = new XMLHttpRequest();
				obj.xhr.onload = () => {
					delete obj.xhr;
				}

				obj.xhr.upload.onprogress = (e) => {
				    obj.ratio = e.loaded / e.total;
				    this.setState({});
				}
				obj.xhr.open("POST", this.props.action);
			}
			
			this.state.filesManager.push(obj);
		})

		this.setState({});
	}

	render() {
		var opt = {};
		if (this.state.useFormData) {
			opt = {
				onDragOver: this.dragover,
				onDragLeave: this.dragleave,
				onDrop: this.drop
			}
		}

		return <div className='file_upload'>
					<div className={'drag_zone' + (this.state.dragover?' dragover':"") }
						onClick={this.clickUploadZone}
						{...opt}
					>
						<p className='tip'>{this.state.tip}</p>
						{this.hiddenInput}
						
						<Previewer files={this.state.filesManager} />
					</div>
					<button onClick={this.uploadFiles}>上传</button>
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
		this.setState({"dragover" : false}, this.createFilesObject);
	}

	clickUploadZone = () => {
		this.fileinput.click();
	}

	createInput() {
		var argus = {
			onChange: (e) => {
				this.setState({files: e.target.files}, this.createFilesObject);
			}
		};
		if (this.props.multiple) {
			argus.multiple = true;
		}

		window._file_uploaded_callback = (data) => {
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