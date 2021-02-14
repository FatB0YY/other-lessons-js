'use strict';
//prototype

/*
const person = {
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('Greet !');
    },
};
*/

const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('Greet !');
    },
});

// мы обрашаемся к прототипу класса и задаем ему новую функцию
// мы расширили базовый прототип класса Object и добавили в него новый метод
Object.prototype.sayHello = function() {
    console.log('Hello !');
};

const lena = Object.create(person);
lena.name = 'Elena';
//прототип идет сверху вниз
//прототипы могут находиться в прототипах у другого объекта
// заключение :
// Прототип - это определенный объект, который присуствует у объектов и он вызывается по цепочке сверху вниз

const str = new String('I am string');
// String это некоторый родительский класс и в фигурных скобках указано значение этой строки

// str.sayHello()
// все в js является объектом и класс Object является самым главным и все от него идет
// можем устраивать наследование внутри js