/*
 *name就像一个java的实例属性，color则像类属性(static变量)，
 * 所有类只维护一份拷贝
 */
function Animal(name){
    this.name = name;
}
Animal.prototype.color = 'white';

var cat1 = new Animal('T1');
var cat2 = new Animal('T2');

console.log(cat1.name===cat2.name);//false
console.log(cat1.color ===cat2.color);//true

console.log("cat1 name="+cat1.name+",clor="+cat1.color);
console.log("cat2 name="+cat2.name+",clor="+cat2.color);
console.log(Animal.prototype.color);
Animal.prototype.color='yellow';//修改原型变量，类对象的属性都会改变
console.log("cat1 name="+cat1.name+",clor="+cat1.color);//yellow
console.log("cat2 name="+cat2.name+",clor="+cat2.color);//yellow
cat2.name='T2new';
cat2.color='blue';//相当于cat2实例对象增加了一个color属性
console.log("cat1 name="+cat1.name+",clor="+cat1.color);//yellow
console.log("cat2 name="+cat2.name+",clor="+cat2.color);//blue

