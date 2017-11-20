var obj={
};
var that=this;
console.log('this='+that);

var f = function(){
    return this;
};
var result=(f()==this);
console.log("this="+f()+",that="+this);//false
console.log(result);//false
console.log(f()===this);//false
console.log(f.call(obj)===obj);//true

var obj={};
console.log(obj.hasOwnProperty('toString'));//false
obj.hasOwnProperty = function(){
    return true;
};
console.log(obj.hasOwnProperty('toString'));//false
console.log(Object.prototype.hasOwnProperty.call(obj,'toString'));//true0
