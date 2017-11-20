//闭包很像是一个加了命名空间的全局变量
function f1(){
	var n=999;
	nAdd =function(){
		n+=1;
	}
	nAdd1 =function(){
		n+=1;
	}

	function f2(){
		console.log(n);
	}
	return f2;
}


function f3(){
	var n=10;//这个n不会覆盖f1中的n
	//nAdd是全局变量，这个nAdd的声明会覆盖f1中的nAdd
	nAdd =function(){
		n+=3;
	}

	function f4(){
		console.log(n);
	}
	return f4;
}

var result1 = f1();
var result2 = f3();
result1();//999
result2();//10
nAdd();
result1();//999
result2();//13
nAdd1();
result1();//1000

var name = "The Window";
var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
    　　　　　　return function(){
        　　　　　　　　return this.name;
        　　　　　　};
    　　　　}
    　　};
console.log(object.getNameFunc()());//undefined
console.log(object.name);//"My Object"
var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　var that = this;//that有点类似带命名空间的全局变量，被保存在内存
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};
　　　　}
　　};
　　console.log(object.getNameFunc()());//MyObject
