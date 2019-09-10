// 创建一个全新对象
// 对象的__proto__要指向构造函数的原型对象
// 执行构造函数
// 返回值为Object类型,则作为new方法的返回值返回,否则返回上述全新对象

function myNew(fn) {
  let instance = Object.create(fn.prototype)
  let res = fn.call(instance)
  return typeof res === 'object' ? res : instance
} 