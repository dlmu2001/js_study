
function StringBuilder(){
    var buffer = [];

    this.add = function(str){
        buffer.push(str);
    }
    this.toString = function(){
        return buffer.join('');
    }
}

var sb = new StringBuilder();
console.log(sb);//每个实例的add/toString都不同，每个实例一份拷贝

function StringBuilder2(){
    this._buffer = [];
}

StringBuilder2.prototype = {
    constructor:StringBuilder2,
    add:function(str){
        this._buffer.push(str);
    },
    toString:function(){
        return this._buffer.join('');
    }
};
var sb2= new StringBuilder2();
console.log(sb2);//私有变量放到实例对象,可以从外部读取
sb2.add('test');
console.log(sb2.toLocaleString());


var module1 = (function(){
    var _buffer = [];
    var add = function(str){
        _buffer.push(str);
    };
    var toString = function(){
        return _buffer.join('');
    };
    return {
        add : add,
        toString: toString
    };
})();
console.log(module1);
console.log(module1._buffer);
module1.add('module');
module1.add(' test');
console.log(module1.toString());
