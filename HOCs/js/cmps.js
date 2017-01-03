import React, {Component} from 'React';
import ICmp from "./ICmp";

class CmpA extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return <div> CmpA </div>
	}
}

class CmpB extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return <div> CmpB </div>
	}
}

var ICmpA = new ICmp(CmpA);
var ICmpB = new ICmp(CmpB);

module.exports = {
	ICmpA
	,ICmpB
}
