import React from 'react';
import ReactDom from 'react-dom';

var _Cmps = {};

// bs_replace_begin
var content = Object.keys(_Cmps).map( (x,index) => {
	var T = _Cmps[x];
	return <T key={index}/>
});

ReactDom.render(
	<div>
		{content}
	</div>
	, 
	document.getElementById('container'));
	
// bs_replace_end
