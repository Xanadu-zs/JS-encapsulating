// 对于普通函数，绑定this指向
// 对于构造函数，要保证原函数的原型对象上的属性不丢失

Function.prototype.myBind = function (content, ...args) {
  let self = this; //this表示调用bind的函数
  let fBound = function () {
    // this instanceof fBound表示构造函数的情况
    return self.apply(this instanceof fBound ? this : context || window, args)
  }
  fBound.prototype = Object.create(this.prototype) //保证原函数的原型对象上的属性不丢失
  return fBound;
}