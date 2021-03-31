'use strict'

function sum(a, b) {
    return a + b
}

function cube(a) {
    return a ** 3
}

const sum = (a, b) => {
    return a + b
}
console.log(sum(41, 1))

const cube = (a) => a ** 3 // лямда функции
console.log(cube(2))

setTimeout(() => {
    console.log('After 1 second')
}, 1000)

//Context

function log() {
    console.log(this) // указывает на эту функцию в контексте которой она была вызвана, в контексте объекта
}

const arrowLog = () => console.log(this) // нет this, всегда указывает на контекст который стоит выше

const person = {
    name: 'Elena',
    age: 20,
    log: log,
    arrowLog: arrowLog,
    // delayLog: function() {
    //     window.setTimeout(function() {
    //         // у глобального объекта нет name andage
    //         // underfined
    //         console.log(this.name + ' ' + this.age)
    //     }, 500)
    // },
    //
    // delayLog: function() {
    //     const self = this // фиксим, в es5
    //     window.setTimeout(function() {
    //         console.log(self.name + ' ' + self.age)
    //     }, 500)
    // },
    //
    delayLog: function() {
        window.setTimeout(() => {
            // теперь this будет объектом person
            console.log(this.name + ' ' + this.age)
        }, 500)
    },
}

// person.arrowLog()
person.delayLog()