/* 
* @Author: eric zheng
* @Date:2015-12-25 10:22:45
* @Last Modified by:eric zheng
* @Last Modified time:2015-12-25 15:43:17
* @WebSite:moyu-edu.com
* @Motto:stay foolish stay hungry
*/
!(function(global,factory){
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

	myQuery.fn = function(){
		alert(1);
	}
	
	if ( typeof noGlobal === strundefined ) {
		window.myQuery = window.$ = myQuery;
	}
	return myQuery;
}));
