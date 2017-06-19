$(function(){

var ul = $('<ul></ul>');

for (let i = 0; i < 3; i++) {
	ul.append($(`<li class="index${i}">${i}</li>`));

}

$('body').append(ul)
// 生成一个环形链表,node数目为 nodeNum
// screenWidth为窗口长度
var Circle = function (nodeNum, screenWidth) {
	var Node = function(content, nextNode){
		content.nextNode = nextNode;
		return content;
	}

	var _circle = Array(nodeNum), k = nodeNum;

	while(k) {
		var _node = new Node({value: k - 1}, _circle[k]);
		k--;
		_circle[k] = _node;
	}

	_circle[nodeNum - 1].nextNode = _circle[0];

	this._circle = _circle;
	this.screen = {
		origin: 0,
		screenWidth: screenWidth
	}
}

Circle.prototype = {
	displayScreen: function() {
		var origin = this.screen.origin
			,screenWidth = this.screen.screenWidth
			,nodeNum = this._circle.length;

		// 计算真实的起点
		if ( !(origin >= 0 && origin < nodeNum) ) {
			if (origin < 0) {
				while(origin < 0) {
					origin += nodeNum;
				}
			} else {
				while(origin >= nodeNum) {
					origin -= nodeNum;
				}
			}
		}

		var str = [], index = 0, node = this._circle[origin];
		while(screenWidth-- && node){
			str.push(node.value);
			node = node.nextNode;
		}

		console.log(str.join("->"))	
	},
	moveLeft: function() {
		this.screen.origin -= 1;
		this.displayScreen();
	},
	moveRight: function() {
		this.screen.origin += 1;
		this.displayScreen();
	}
}


var c = new Circle(22, 20);

})

