import React, {Component} from 'react'
import {render} from 'react-dom';

//options.files struct
// [
// 	{
// 		name: String,
// 		ratio: Number,
// 		img: String
// 	}
// ]

export default class Previewer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var content = this.props.files.map((item,index) => {
			return <li className='file_preview_cell' key={index}>
				<p className='file_name'>{item.name}</p>
				<div className='upload_progress' style={{width: item.ratio*100 + "%"}}></div>
			</li>
		})
		if (content.length === 0) {
			return null;
		}

		return <ul className='files_previewer'>
			{content}
		</ul>
	}
}