'use strict'

// наследование, прототипы
let a = {
    text: 'Hello',
    color: 'red',
    bold: true,
    show: function() {
        console.log(this.color)
    },
    // __proto__: c, error
}
let b = {
    fontSize: '24px',
    __proto__: a,
}
b.text = 'world'
b.color = 'green'

console.log('a', a)
console.log('b', b)
console.log('b.text', b.text)
console.log('b.show():')
b.show()

//b = 5 ошибка !

let c = {
    fontFamily: 'Roboto',
    __proto__: b,
}
console.log(c)
console.log(('c.bold', c.bold))

// a -> b -> c

console.log('hasOwnProperty("fontSize"):', c.hasOwnProperty('fontSize')) // false
console.log('hasOwnProperty("fontFamily"):', c.hasOwnProperty('fontFamily')) // true