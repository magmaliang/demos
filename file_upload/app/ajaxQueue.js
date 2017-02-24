//构建一个异步串行链
export var delay = (s)=>(resolve,reject,data)=>{
	data && $("body").append("<br/>"+data.msg);

	$.ajax({
		url:"./base/delay.php?s="+s
		,success:function(rs){
			resolve&&resolve(rs);
		}
		,error:function(rs){
			reject&&reject();
		}
	})
}

var lastDeal = (x)=>{
	$("body").append("<br/>")
	$("body").append("last__"+x.msg);
}

export function pipe(que){
	var len = que.length -1;

	var inner = que[len].bind(null,lastDeal,null);

	while(--len>=1){
		inner = que[len].bind(null,inner,null);
	}

	que[0](inner,null);
}