// instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象原型链中的任何位置


function instanceOf(left, right) {
  let proto = left.__proto__
  let prototype = right.prototype

  while (true) {
    if (proto === null) return false
    if (proto === prototype) return true
    proto = proto.__proto__

  }
}