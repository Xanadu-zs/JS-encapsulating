<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>继承</title>
</head>

<body>
    <script>
    // 1.原型链继承
    // 引用类型的属性被所有实例共享
    function Parent() {
        this.name = 'Bob'
    }

    Parent.prototype.getName = function() {
        console.log(this.name)
    }
    // 缺点每个方法都要重新创建

    function Child() {}
    Child.prototype = new Parent()
    var child = new Child()

    console.log(child1, getName()) //Bob


    // 1.1原型链继承 改良版: 先改变原型在创建对象
    function Parent() {

    }

    // 先改变再创建
    Parent.prototype = {
        // 判断构造函数，不破坏原有的原型对象结构
        constructor: Perent,
        a1: function() {},
        a2: function() {},
        a3: function() {},
        a4: function() {},
        a5: function() {}
    }

    var child = new Parent()
    console.log(child.a1)
    // 现在就可以访问原型中的方法





    // 2.借用构造函数
    // 方法都在构造函数中定义，每次创建实例都会创建一遍方法
    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    function Student(name, age, sex, grade) {
        Person.call(this, name, age, sex);
        this.grade = grade;
    }
    var student = new Student();




    function Parent() {
        this.names = ['kevin', 'dais']
    }

    function Childs() {
        Parent.call(this)
    }

    var child1 = new Child()
    child1.names.push('add') //['kevin','dais','add']
    console.log(child1.names)
    var child2 = new Child()
    console.log(child2.names) //['kevin','dais]

    //组合继承
    // 原型链继承和经典继承双剑合璧。
    // 优点：融合原型链继承和构造函数的优点， 最常用的继承模式。

    function Parent(name) {
        this.name = name;
        this.colors = ['red', 'blue', 'green'];
    }

    Parent.prototype.getName = function() {
        console.log(this.name)
    }

    function Child(name, age) {

        Parent.call(this, name);

        this.age = age;

    }

    Child.prototype = new Parent();
    Child.prototype.constructor = Child;

    var child1 = new Child('kevin', '18');

    child1.colors.push('black');

    console.log(child1.name); // kevin
    console.log(child1.age); // 18
    console.log(child1.colors); // ["red", "blue", "green", "black"]

    var child2 = new Child('daisy', '20');

    console.log(child2.name); // daisy
    console.log(child2.age); // 20
    console.log(child2.colors); // ["red", "blue", "green"]


    // Father.prototype.LastName = "Deng";
    // function Father{
    // }
    // function Son () {
    // }
    // Son.prototype = Father.prototype
    // var son = new Son();
    // var father = new Father();
    // 
    // 圣杯模式--继承
    // 1
    function inherit(Target, Origin) {
        function F() {};
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constuctor = Target;
        Target.prototype.uber = Origin.prototype;
    }
    // 2222
    var inherit = (function() {
        var F = function() {};
        return function(Target, Origin) {
            F.prototype = Origin.prototype;
            Target.prototype = new F();
            Target.prototype.constuctor = Target;
            Target.prototype.uber = Origin.prototype;
        }
    }());
    </script>
</body>

</html>