'use strict'
// прототипно-ориентированное программирование

let str = 'some'
let strObj = new String(str) // превращает в объект

// --------- устаревшее решение

const soldier = {
    name: 'Ivan',
    health: 100,
    armor: 100,
    sayHello: function() {
        console.log(`Hello ${this.name}`)
    },
}

const john = {
    name: 'john',
    health: 50,
    __proto__: soldier, //устаревшее решение
}

// john.sayHello() // hello john

// --------- новое решение

const soldier2 = {
    name: 'Ivan2',
    health: 100,
    armor: 100,
    sayHello: function() {
        console.log(`Hello ${this.name}`)
    },
}

const john2 = {
    name: 'john2',
    health: 50,
    // __proto__: soldier, //устаревшее решение
}

Object.setPrototypeOf(john2, soldier2)
console.log(john2)
john2.sayHello() // hello john