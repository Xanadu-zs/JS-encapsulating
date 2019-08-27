// 它创建了一个全新的对象。
// 它会被执行[[Prototype]]（也就是__proto__）链接。
// 它使this指向新创建的对象。。 
// 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
// 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error) ，那么new表达式中的函数调用将返回该对象引用

function New(func) {
  var res = {}
  if (func.protptype != null) {
    res.__proto__ = func.protptype
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1))
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    return ret
  }
  return ret

}
// 原文地址：https://github.com/mqyqingfeng/Blog/issues/13 

//1
function objectFactory() {
  var obj = new Object()
  Constructor = [].shift.call(arguments)

  obj.__proto__ = Constructor.prototype

  Constructor.apply(obj, arguments)
  return obj
}
// 用new Object() 的方式新建了一个对象 obj
// 取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
// 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
// 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
// 返回 obj


function objectFactory() {
  var obj = new Object(),//从Object.prototype上克隆一个对象

    Constructor = [].shift.call(arguments);//取得外部传入的构造器

  var F = function () { };
  F.prototype = Constructor.prototype;
  obj = new F();//指向正确的原型

  var ret = Constructor.apply(obj, arguments);//借用外部传入的构造器给obj设置属性

  return typeof ret === 'object' ? ret : obj;//确保构造器总是返回一个对象

}


//last
function objectFactory() {
  var obj = new Object(),
    Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
};


// var a = {} 其实是var a =new Object()的语法糖
// var a = [] var a = new Array() 的语法糖
// function foo() 其实是 var Foo = new Function()