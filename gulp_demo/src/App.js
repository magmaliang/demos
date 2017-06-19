import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	render() {
		return <div className='app'>
			<input type='button' onClick={this.click} value='替换CmpA为CmpB'></input>
			<p>在点击按钮的时候注意控制台chunk的按需加载</p>
		</div>
	}
	click(){
		import("./cmps/cmpb").then(function(CmpB){
			ReactDom.render(<CmpB />, document.getElementById('cmpa'));
		})
	}
}

module.exports = App;