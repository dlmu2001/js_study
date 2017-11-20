function fun_name (str){
    var re = /function\s*(\w*)/i;  
    var matches = re.exec(str);  
    return matches[1];  
}  
function test(arg1,arg2){
	console.log('name:'+fun_name(arguments.callee.toString()));
	console.log(typeof arg1);
	console.log(typeof arg2);
}
var a={
};
test(1,a);
test('abc');
test();

var res='{"code":0,"status":"ok"}';

var response=JSON.parse(res);

var r={};
r["message"]=response["status"];

console.log(r.message);
