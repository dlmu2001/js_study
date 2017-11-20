## javascript study

 * javascript以map的方式来定义一个对象，这个对象就显得非常灵活,也天然适合和json结合

 * javascript允许在对象声明后任何时刻新增/删除属性，非常灵活
 
 * javascript使用了单线程模型，这一点与大部分原生的系统不一样，这意味着不再需要考虑线程安全的问题
 
 * javascript的promise有点像rxjava，当然，最核心的转换没有
 
 * javascript的作用域很特别
 
 * javascript并没有“私有”这个概念，要靠模拟来实现。所以像单例这种模式，js实现起来比其它语言会麻烦一点
 
 * javascript是事件驱动的，而很多其它的语言的事件驱动依赖于平台，而不是语言本身,或者可以理解为javascript本身就
 部分平台特性，这个平台就是V8或者浏览器

 * javascript是弱类型变量，解释器运行时检查数据类型，而Java/C++采用强类型变量检查，即所有变量在编译之前必须做声明，
 声明后变量类型就固定下来。这一点在函数声明时让javascript特别灵活。

 比如说有个函数，它第一个参数可以是int类型，也可以是string类型，或者其他object类型，第二个参数也可以是多种类型，而且
 这个参数还是可选的。

 在c++可以通过overloading和default参数来实现，但是仍然要写好几个函数。

 在Java里面通过overloading实现，但是java没有缺省参数这个特性，所以要写更多个函数。或者使用不太友好的arguments的map作为参数。


 但是神奇的javascript，只要一个函数，搞定一切。充分利用了参数运行时检查类型的特性。

 * 可以给原型增加方法，Java没有这个特性，只能用继承overriding来实现,碰到String这种final类，就没有招了，而继承只能改变自
 己的类，不能修改程序中使用到基类的地方。Object-C通过Categories可以实现往基类添加新成员，通过Posing来修改基类的方法，
 但是Posing已经被Deprecated了，相比之下，Javascript显然灵活很多。

 * 因为是解释语言，所以没有C++那种预编译的特性,而预编译特性在多平台差异化的时候比较常用，对Javascript来说，大多情况下可以
 认为只有一个平台，所以一般情况下制作运行时开关，不做编译时开关。这个特性Java也没有。

 * javascript没有模板类(Template)的概念，也许是javascript太灵活了，根本不需要再通过模板类来提高灵活性以及代码的复用性。或
 者本质上可以认为javascript一切都是泛型的，根本不再需要泛型的概念。
 
 * javascript里面，函数就是对象，经常会出现一个对象的函数被赋值给一个变量的情况，这个时候如果函数里面使用到了this，它的指向会
 发生变化

