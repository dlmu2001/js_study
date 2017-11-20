String.prototype.double=function(){
	return this.valueOf()+this.valueOf();
};
String.prototype.valueOf=function(){
	return 'abc123';
};
console.log('abc'.double());
