this

// 1. 函数调用，this指向window
// 2. 方法调用，this指向方法
// 3. 构造函数调用，this指向new的构造函数实例
// 


// 变量声明了未赋值undefind
// 对象属性不存在也是undefind

// 4. 上下文调用方式
call(), apply()  //第一个参数决定了内部this的值
// 总结：
// call方法的第一个参数 
// 如果是一个对象类型，那么函数内部this指向该对象
// 如果是undefined、unll，那么内部的this指向window
// 如果是数字、字符串、布尔值，则this对应Number,String,Boolean构造函数的实例


// bind() 绑定
var obj5 = {
  age: 18,
  run: function () {
    console.log(this);

    setTimeout((function () {
      console.log(this.age);
    }).bind(this), 50);
  }
}


  (function eat() {
    console.log(this.seconds)
  }).bind({ seconds: 360 })()//360


// 执行bind后产生新函数，新函数逻辑一样，只是this指向不一样