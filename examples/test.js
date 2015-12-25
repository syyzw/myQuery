/* 
* @Author: eric zheng
* @Date:2015-12-25 00:57:33
* @Last Modified by:eric zheng
* @Last Modified time:2015-12-25 18:52:38
* @WebSite:moyu-edu.com
* @Motto:stay foolish stay hungry
*/
QUnit.test( "isFunction", function( assert ) {
  function fn(){

  }
  assert.ok($.isFunction(fn) === true,"Passed!");
  assert.ok( $.isFunction(function(){}) === true, "Passed!" );
  assert.ok( $.isFunction("") === false, "Passed!" );
  assert.ok( $.isFunction(new Object()) === false, "Passed!" );
});

QUnit.test("isPlainObject",function(assert){
	assert.ok($.isPlainObject({}) === true,"Passed");
	assert.ok($.isPlainObject(document) === false,"Passed");
	assert.ok($.isPlainObject([]) === false,"Passed");
	assert.ok($.isPlainObject(null) === false,"Passed");
	assert.ok($.isPlainObject(undefined) === false,"Passed");
	assert.ok($.isPlainObject('abc') === false,"Passed");
});

QUnit.test("isNull",function(assert){
	assert.ok($.isNull(null) === true,"Passed");
	assert.ok($.isNull({}) === false,"Passed");
	assert.ok($.isNull(undefined) === false,"Passed");
	assert.ok($.isNull('') === false,"Passed");
});

QUnit.test("isUndefined",function(assert){
	assert.ok($.isUndefined(undefined) === true,"Passed");
	assert.ok($.isUndefined({}) === false,"Passed");
	assert.ok($.isUndefined(null) === false,"Passed");
	assert.ok($.isUndefined('') === false,"Passed");
});

QUnit.test("isNumber",function(assert){
	assert.ok($.isNumber(3222) === true,"Passed");
	assert.ok($.isNumber({}) === false,"Passed");
	assert.ok($.isNumber('ewf') === false,"Passed");
	assert.ok($.isNumber('333') === false,"Passed");
});

QUnit.test("isNumeric",function(assert){
	assert.ok($.isNumeric(3222) === true,"Passed");
	assert.ok($.isNumeric('233') === true,"Passed");
	assert.ok($.isNumeric('ewf') === false,"Passed");
	assert.ok($.isNumeric({}) === false,"Passed");
});

QUnit.test("isString",function(assert){
	assert.ok($.isString('3222') === true,"Passed");
	assert.ok($.isString('afwefw') === true,"Passed");
	assert.ok($.isString(333) === false,"Passed");
	assert.ok($.isString({}) === false,"Passed");
});

QUnit.test("isBoolean",function(assert){
	assert.ok($.isBoolean(true) === true,"Passed");
	assert.ok($.isBoolean(100) === false,"Passed");
	assert.ok($.isBoolean('wfe') === false,"Passed");
	assert.ok($.isBoolean({}) === false,"Passed");
});

QUnit.test("isPrimitive",function(assert){
	assert.ok($.isPrimitive(true) === true,"Passed");
	assert.ok($.isPrimitive(100) === true,"Passed");
	assert.ok($.isPrimitive('wfe') === true,"Passed");
	assert.ok($.isPrimitive(undefined) === true,"Passed");
	assert.ok($.isPrimitive({}) === false,"Passed");
	assert.ok($.isPrimitive(null) === false,"Passed");
	assert.ok($.isPrimitive(function(){}) === false,"Passed");
});

QUnit.test("isArray",function(assert){
	assert.ok($.isArray([]) === true,"Passed");
	assert.ok($.isArray(new Array()) === true,"Passed");
	assert.ok($.isArray('weewf') === false,"Passed");
	assert.ok($.isArray({}) === false,"Passed");
	assert.ok($.isArray(function(){}) === false,"Passed");
});

QUnit.test("isEmptyObject",function(assert){
	assert.ok($.isEmptyObject([]) === false,"Passed");
	assert.ok($.isEmptyObject(new Array()) === false,"Passed");
	assert.ok($.isEmptyObject('weewf') === false,"Passed");
	assert.ok($.isEmptyObject({}) === true,"Passed");
	assert.ok($.isEmptyObject(function(){}) === false,"Passed");
	assert.ok($.isEmptyObject(new Object) === true,"Passed");
});