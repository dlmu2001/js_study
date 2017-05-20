function createA(){
   var a = document.createElement('a');
   a.href='http://www.baidu.com';
   a.text="link";
   document.body.appendChild(a);
}
var buttonCreateA=document.getElementById('createa');
buttonCreateA.addEventListener('click',createA);
