export function formulaCheck(str){
	var rules = {
		space_check:function(str){
			//反证法，使用空格分隔str,如果数组中不是数字、(、)、and、or中的一种 ==> 没有用空格隔开
			var acceptable_char = ["(",")","and","or"]
				,str_arr = str.split(" ")
				,legal = true
				,i = 0;

			while(i<str_arr.length){
				legal = /^(\(|\)|(and)|(or)|\d+)$/g.test(str_arr[i]);
				if (!legal) {
					return false;
				}
				i++;
			}

			return true;
		}
		//有 and 和 all,括号必须存在
		,brackets_need_check:function(str){
			var has_and_or = str.indexOf("and") > 0 && str.indexOf("or") > 0;
			if (has_and_or) {
				return /\(|\)/g.test(str);
			}

			return true;
		}
		//括号闭合检测
		,brackets_even_check:function(str){
			//提取括号
			var brackets = str.replace(/[^\)\()]/g,"").split("")
				,stack = []
				,i = 0;

			var origin_str = brackets.join("-");
			while(brackets.length > 0){
				var top = brackets.shift();
				if (stack.length>0 && (top !== stack[stack.length-1])) {
					stack.pop();
				}else{
					stack.push(top)
				}
			}

			if (stack.length == 0) {
				return true
			}else{
				return false;
			}
			
		}
		//词法分析：在同一层中不能同时存在or 和 and
		,lexical_analysis:function(str){
			
			//去除所有空格
			var lexical_tree = str.replace(/(\d+)|(\s+)/g,"")
				//子树发现，用于移除合法子树
				,sub_tree_reg = /\((and)+\)|\((or)+\)/g
				,legal = true;

			//最后无法分析的树
			var final_tree = lexical_tree;

			//一直分析到不能分析为止
			while(true){
				console.log(final_tree)
				var _tem = final_tree.replace(sub_tree_reg,"");
				//如果没有成功移除子树
				if (_tem === final_tree) {
					break;
				}else{
					final_tree = _tem;
				}
			}

			//检测最后的树是否合法
			if (/^((and)+|(or)+|\s)$/g.test(final_tree)) {
				return true
			}else{
				return false;
			}
			
			
		}
	}

	function formula_check(formula){
		//在不影响语意的情况下，格式化formula
		//强制括号左右有空格，多个连续空格被压缩成一个,去除首尾空格
		var str = formula.replace(/\(/g," ( ").replace(/\)/g," ) ").replace(/\s{2,}/g," ").trim();

		var check_items = ["space_check","brackets_even_check","brackets_need_check","lexical_analysis"]
			,legal = true
			,item_index = 0;

		while(legal && item_index< check_items.length){
			legal = rules[check_items[item_index]](str);
			if (!legal) {
				console.log(check_items[item_index]+" 检测未通过")
				return false;
			}
			item_index++;
		}

		return legal;
	}

	return formula_check(str);
}

// example
// var res = formula_check();
// console.log(res("(1 and (2 or 3)) and (4  and 7) and(8 or 9)"))
























  
