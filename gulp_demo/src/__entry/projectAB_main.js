import React from 'react';
import ReactDom from 'react-dom';

var _Cmps = {};

require.ensure([],function(require){
_Cmps["cmpa"] = require("../cmps/cmpa")
_Cmps["cmpb"] = require("../cmps/cmpb")

var content = Object.keys(_Cmps).map( (x,index) => {
	var T = _Cmps[x];
	return <T a={123} key={index}/>
});

ReactDom.render(
	<div>
		{content}
	</div>
	, 
	document.getElementById('container'));
	
}, "projectAB_webpackJsonP")
