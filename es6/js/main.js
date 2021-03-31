'use strict'
// они абсолютно уникальны

const symbol = Symbol('demo') //Symbol(demo)
console.log(symbol)

const other = Symbol('demo')
console.log(symbol == other) // false
console.log(symbol === other) // false

//

const obj = {
    banana: 1,
    orange: 2,
    meat: 4,
    name: 'Elena',
    [symbol]: 'meta',
}

console.log(obj)

for (let key in obj) {
    console.log(key)
}