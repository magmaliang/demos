import React from 'react';

class CmpB extends React.Component {
	render() {
		console.log(this.props)
		return <div>
			<p>这是组件B</p>
			<input type="button" onClick={this.loadCmpC}/>
		</div>
	}
	loadCmpC(){
		require.ensure([], function() {
			require("../cmps/cmpc")();
		})
	}
}

module.exports = CmpB;


