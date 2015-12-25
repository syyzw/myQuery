/* 
* @Author: eric zheng
* @Date:2015-12-25 10:22:45
* @Last Modified by:eric zheng
* @Last Modified time:2015-12-25 17:49:12
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

myQuery.isString = function(){
	return typeof arguments[0] === "string";
}

myQuery.isBoolean = function(){
	return typeof arguments[0] === "boolean";
}

myQuery.isPrimitive = function(){
	var ret = false;
	if(myQuery.isNull( arguments[0] ) 
		|| myQuery.isUndefined( arguments[0] ) 
		|| myQuery.isNumber( arguments[0] ) 
		|| myQuery.isString( arguments[0] ) 
		|| myQuery.isBoolean( arguments[0] )
	){
		ret = true;
	}
	return ret;
}

myQuery.isArray = function(){
	return Array.isArray(arguments[0]);
}

myQuery.isEmptyObject = function(){
	var ret = true;
	for(var i in arguments[0]){
		if(arguments[0])ret = false;
		break;
	}
	return ret;
}

myQuery.isWindow = function(){
	var ret = false;
	if(arguments[0] && typeof arguments[0] === "object" && arguments[0].document){
		ret = true;
	}
	return ret;
}
/*==============================isXXX系列 end ==================================================*/

/*==============================函数式API start ==================================================*/
// myQuery.map = function(){
// 	var ret = [];
// 	if( arguments[0] == null || !/\[object Array\]|\[object Object\]/.test( arguments[0] ) ){
// 		ret = [arguments[0]];
// 	}

// 	if( Array.isArray(arguments[0]) ){
// 		if( arguments.length == 1 || !/\[object Function\]|\[object String\]/.test( arguments[1] )){
// 			ret = arguments[0];
// 		}else{
// 			//todo
// 		}
// 	}else{
// 		ret = [arguments[0]];
// 	}



// };
/*==============================函数式API end ==================================================*/





























































	
	if ( typeof noGlobal === strundefined ) {
		window.myQuery = window.$ = myQuery;
	}
	return myQuery;
}));
