/* 
* @Author: eric zheng
* @Date:2015-12-25 10:22:45
* @Last Modified by:eric zheng
* @Last Modified time:2015-12-25 18:52:23
* @WebSite:moyu-edu.com
* @Motto:stay foolish stay hungry
*/
!( function( global,factory ){
	var myQuery = factory(global);
	if(typeof module === "object" && typeof module.exports === "object"){
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "myQuery requires a window with a document" );
				}
				return factory( w );
			}
	}else{
		global.myQuery = myQuery;
	}
}(typeof window !== "undefined" ? window : this,function(global,noGlobal){
	var strundefined = typeof undefined;
	var myQuery = function(){

	}




/*==============================isXXX系列 start ==================================================*/
myQuery.isFunction = function(){
	return typeof arguments[0] == "function";
}

myQuery.isPlainObject = function(){
	return /\[object Object\]/.test( Object.prototype.toString.call( arguments[0] ) );
}

myQuery.isNull = function(){
	return arguments[0] === null;
}

myQuery.isUndefined = function(){
	return arguments[0] === undefined;
}

myQuery.isNumber = function(){
	return typeof arguments[0] === "number";
}

myQuery.isNumeric = function(){
	return /^[0-9]+$/.test(arguments[0]);
}

myQuery.isString = function(){
	return typeof arguments[0] === "string";
}

myQuery.isBoolean = function(){
	return typeof arguments[0] === "boolean";
}

myQuery.isPrimitive = function(){
	return 'array|object|function'.indexOf(typeof arguments[0]) === -1;
}

myQuery.isArray = function(){
	return Array.isArray(arguments[0]);
}

myQuery.isEmptyObject = function(){
	var ret = true;
	if(typeof arguments[0] != "object" || arguments[0] === null || Array.isArray(arguments[0]))ret = false;
	for(var i in arguments[0]){
		if(arguments[0])ret = false;
		break;
	}
	return ret;
}

myQuery.isWindow = function(){
	return arguments[0]!= null && arguments[0] === arguments[0].window;
}

/*==============================isXXX系列 end ==================================================*/

/*==============================函数式API start ==================================================*/

/*==============================函数式API end ==================================================*/


/*==============================正则 start ==================================================*/
//手机、邮箱、是否是id，<div></div>的形式,<img>的形式、qq、网址、中国邮政编码 匹配身份证 ip  中文字符 

/*==============================正则 end ==================================================*/

















//svg,canvas,file Api





















































	
	if ( typeof noGlobal === strundefined ) {
		window.myQuery = window.$ = myQuery;
	}
	return myQuery;
}));
