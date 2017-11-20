/*
 * 不是单例的情况
 */
var NonSingletonObj=function(){
	console.log("NonSingletonObj constructor");
}

var a = new NonSingletonObj();

var b = new NonSingletonObj();

console.log(a===b);//"false"

/*
 * 简单单例实现,革命靠自觉，调用者如果使用new声明变量，
 * 就不是单例，必须使用getInstance,不透明
 */

var SingletonObj1 = function(){
	this.instance=null;
}
SingletonObj1.getInstance=function(){
	if(!this.instance){
		this.instance = new SingletonObj1()
	}
	return this.instance;
}
var a = new SingletonObj1();

var b = new SingletonObj1();

console.log(a===b);//"false"

var c=SingletonObj1.getInstance();
var d = SingletonObj1.getInstance();
console.log(c===d);//"true"

/*
 * 透明的单例,利用了自执行函数和闭包,
 * 但是单例的代码会和业务耦合在一起
 */
var SingletonObj2 =(function(){
	var instance;
	var SingletonObj2 = function(){
		if(instance){
			return instance;
		}
		return instance = this;
	}
	return SingletonObj2;
		
})();
var a = new SingletonObj2();
var b = new SingletonObj2();
console.log(a===b);//"true"
/*
 * 通过代理模式实现单例,将单例实现抽象出来，和
 * 具体业务解耦
 */
var ProxySingletonObj = (function(){
	var instance;
	return function(){
		if(!instance){
			instance = new NonSingletonObj();
		}
		return instance;
	}
})();
console.log("new ProxySingletonObj");//懒汉模式，用到才创建单例
var a = new ProxySingletonObj();
var b = new ProxySingletonObj();
console.log(a===b);//"true"
/*
 *通用单例模式,懒汉模式
 */
var NonSingletonObj=function(name){
	this.name = name;
}
var createNonSingletonObj=function(){
	console.log("here createNonSingletonObj");
	return new NonSingletonObj("test");
};

function getSingle(fn){
	var result;
	return function(){
		return result || (result = fn.apply(this,arguments));
	}
}
var f = getSingle(createNonSingletonObj);
console.log("lazy init");
var a = f();
var b = f();
console.log("here");
console.log(a===b);//"true"
