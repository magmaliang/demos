import {ICmpA} from "./cmps";
import React from "react";
import ReactDOM from 'react-dom';

var data = {
	cmp_type:"cmpa"
	,extention_name:"cmpa_1"
}

ReactDOM.render(
	<ICmpA {...data}/>
	,document.getElementById("container"))

function copyToClipboard(node) {
	  var aux = document.createElement("input");
	  var content = node.innerHTML || node.value;
	  aux.setAttribute("value", content);
	  document.body.appendChild(aux);
	  aux.select();
	  document.execCommand("copy");
	  document.body.removeChild(aux);
}


var ipt = document.createElement("input");
var btn = document.createElement("input");
btn.setAttribute("type","button");

document.body.append(ipt);
document.body.append(btn);

btn.addEventListener("click",function(){
	copyToClipboard(ipt);
})