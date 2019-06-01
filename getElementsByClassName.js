var getElementsByClassName = function(opts) {
    var searchClass = opts.searchClass; //存储查找的类名
    var node = opts.node || document; //存储要查找的范围
    var tag = opts.tag || * ;//存储一定范围内要查找的标签
    var result = [];
    //判断是否支持getClass属性

    if (document.getElementsByClassName) {//如果支持
    	var node = node.getElementsByClassName(searchClass);
    	if (tag !== "*") {
    		for (var i = 0; node =nodes[i++]) {
    			if (node.tagName === tag.toUpperCase()) {
    				result.push(node)
    			}
    		}
    	}else {
    		result = nodes;
    	}

    } else {//使IE8一下的浏览器可以支持该属性
        var els = node.getElementsByTagName(tag);
        var elsLen = els.length;
        var i, j;
        var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
        for (i = 0, j = 0; i < elsLen; i++) {
            if (pattern.test(els[i].className)) {//检测正则表达式
                result[j] = els[i];
                j++;
            }
        }
        return result;
    }



}