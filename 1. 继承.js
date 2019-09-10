// 1. 借用构造函数
// 方法都在构造函数中定义，每次创建实例都会创建一遍方法
// 原理：call和apply调用方式
// 局限性：父类构造函数的代码必须完全适用于Person(子类构造函数)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, grade) {
    // Person.apply(this, [name, age, sex]);
    Person.call(this, name, age, sex);
    this.grade = grade;
}
var student = new Student();



// 2. 原型链继承
// 缺点：引用类型的属性被所有实例共享
function Parent() {
    this.name = 'Bob'
}

Parent.prototype.getName = function () {
    console.log(this.name)
}
// 缺点每个方法都要重新创建一个函数
function Child() { }
Child.prototype = new Parent()
var child = new Child()

console.log(child1, getName()) //Bob


// 2.1原型链继承 改良版: 先改变原型在创建对象
function Parent() {
    this.name = name
}
// 先改变再创建
Parent.prototype = {
    // 判断构造函数，不破坏原有的原型对象结构
    constructor: Parent,
    a1: function () { },
    a2: function () { },
}

var child = new Parent()
console.log(child.a1)
// 现在就可以访问原型中的方法




//3. 组合继承
// 原型链继承和经典继承双剑合璧。
// 优点：融合原型链继承和构造函数的优点， 最常用的继承模式。
function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = new Parent();
// 优化1
// Child.prototype = Parent.prototype
// var sss = new Child();
// sss.prototype.constructor = Child;
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');
child1.colors.push('black');
console.log(child1.name); // kevin

// 优化2
function Parent5() {
    this.name = 'parents'
    this.play = [1, 2, 3]
}

function Child5() {
    Parent.call(this)
    this.type = 'child5'

}
Child5.portotype = Object.create(Parent5.prototype)
Child5.prototype.constructor = Child5;



// 4. 寄生继承，寄生组合继承
// 圣杯模式--继承
// 1
function inherit(Target, Origin) {
    function F() { };
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constuctor = Target;
    Target.prototype.uber = Origin.prototype;
}
// 2222
var inherit = (function () {
    var F = function () { };
    return function (Target, Origin) {
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constuctor = Target;
        Target.prototype.uber = Origin.prototype;
    }
}());