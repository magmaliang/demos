module.exports = function(){
	var sidebar = document.createElement("ul");
	sidebar.className = "sidebar";
	var i = 5;
	while(i--){
		var li = document.createElement("li");
		li.innerHTML = i;
		sidebar.appendChild(li);
	}
	var btn = $("<input type='button' value='start web worker' />").bind("click",function(){
		var worker = new Worker("./app/webworkerTest.js")
	})
	sidebar.appendChild(btn[0]);

	return sidebar;
}