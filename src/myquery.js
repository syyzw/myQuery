/* 
* @Author: eric zheng
* @Date:2015-12-25 10:22:45
* @Last Modified by:eric zheng
* @Last Modified time:2015-12-25 16:58:03
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
			};
	}else{
		global.myQuery = myQuery;
	}
}(typeof window !== "undefined" ? window : this,function(global,noGlobal){
	var strundefined = typeof undefined;
	var myQuery = function(){

	};



/*==============================函数式API start ==================================================*/
myQuery.map = function(){
	var ret = [];
	if( arguments[0] == null || !/\[object Array\]|\[object Object\]/.test( arguments[0] ) ){
		ret = [arguments[0]];
	}

	if( Array.isArray(arguments[0]) ){
		if( arguments.length == 1 || !/\[object Function\]|\[object String\]/.test( arguments[1] )){
			ret = arguments[0];
		}else{
			//todo
		}
	}else{
		ret = [arguments[0]];
	}



};
/*==============================函数式API end ==================================================*/





























































	
	if ( typeof noGlobal === strundefined ) {
		window.myQuery = window.$ = myQuery;
	}
	return myQuery;
}));
