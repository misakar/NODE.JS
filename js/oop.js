// 封装
// 生成原始对象的代码

// 原始的类
var cat = {
    name : '',
    color : ''
}

// 创建空对象
var cat1 = {};
// 进行属性赋值
cat1.name = 'cat1';
cat1.color = 'red';

// 改进原始模式
// 使用函数, 简化代码
function cat(name, color)
{
    return
    {
        name:name,
        color:color
    }
}

// 生成实例的时候就相当于调用函数
var cat1 = cat('cat1', 'red');
var cat2 = cat('cat2', 'red');
// 问题是: 这样构造的同一个类的对象之间是没有任何联系的

// 继续改进: 使用构造函数
// 构造函数:
// 构造函数就是一个普通函数但内部使用了this变量,当使用new构造对象的时候,
// this就会绑定给这个对象(很像C++中的this指针)
function cat(name, color)
{
    this.name = name,
    this.color color
}

// 现在生成对象
var cat1 = new cat('cat1', 'red');
var cat2 = new cat('cat2', 'red');
// 这是cat1和cat2 自动就有constructor属性指向其构造函数
// 同时可以使用 instanceof 进行验证 (很像python中的isinstance函数)

// 构造函数的内存占用问题
// 其实在C++等成熟的OOP语言中, 实例之间共有的父类方法只占用一块内存,
// 然后所有实例调用方法均指向一块内存地址
// js 中使用 Prototype 模式即可: 把不变的方法和属性绑定在 protype上
function Cat(name, color)
{
    this.name = name,
    this.color = color
}
Cat.prototype.type = "cat";
Cat.prototype.eat = function(){alert('eat mourse!')};

