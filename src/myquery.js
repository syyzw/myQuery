/* 
* @Author: eric zheng
* @Date:2015-12-25 10:22:45
* @Last Modified by:eric zheng
* @Last Modified time:2015-12-25 23:58:43
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

	myQuery.VERSION = 0.0.1;



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

/*修复数组*/
myQuery.arrayShuffle = function(){

}
myQuery.arrayFlatten = function(){
	
}
myQuery.arrayUnique = function(){
	
}
myQuery.lastDayOfThisMonth = function(){

}
/*==============================函数式API start ==================================================*/

/*==============================函数式API end ==================================================*/


/*==============================正则 start ==================================================*/
var regPhone = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
var regMobile = /^0{0,1}(13[0-9]|15[0-9]|18[7-9]|14[0-9]|17[0-9])[0-9]{8}$/;
var regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
// var regQQ = ;
// var regLink = ;
// var regZip = ;
// var regIdcard = ;
// var regIp = ;
// var regZW = ;

myQuery.isMobile = function(str){
	return regMobile.test(str);
}

myQuery.isPhone = function(str){
	return regPhone.test(str);
}
/*==============================正则 end ==================================================*/

myQuery.logError = function(){
	
}



/*==============================browser support start ==================================================*/

myQuery.isAndroid = function(){

}

myQuery.isIos = function(){

}

myQuery.isWeixin = function(){

}
/*==============================browser support end ==================================================*/

myQuery.init = function(fn){
	var readyState = 0;
	global.addEventListener("DOMContentLoaded",function(){
		if(readyState === 0){
			readyState = 1;
			(typeof fn === "function") && fn();
			global.removeEventListener("DOMContentLoaded");
			global.document.removeEventListener("load");
		}
		
	},false);
	global.document.addEventListener("load",function(){
		if(readyState === 0){
			readyState = 1;
			(typeof fn === "function") && fn();
			global.removeEventListener("DOMContentLoaded");
			global.document.removeEventListener("load");
		}
	},false);
}


myQuery.makeArray = function(){


}



function mixin(object,target){}//组合
//装饰者模式
myQuery.extend = function(){

}



	if ( typeof noGlobal === strundefined ) {
		var _$ = global.$;
		global.myQuery = global.$ = myQuery;
		myQuery.noConflict = function(deep){
			global.$ = _$;
			if(deep)global.myQuery = _myQuery;
			return myQuery;
		}
		
	}
	return myQuery;
}));
