'use strict'

// объекты
const options = {
    name: 'test',
    width: 1024,
    colors: {
        border: 'black',
        bg: 'green',
    },
    makeTest: function() {
        console.log(this.name)
    },
}

// перебор объекта
let counter = 0
for (let key in options) {
    if (typeof options[key] === 'object') {
        for (let item in options[key]) {
            console.log(`Свойство ${item}, значение ${options[key][item]}`)
            counter++
        }
    } else {
        console.log(`Свойство ${key}, значение ${options[key]}`)
        counter++
    }
}
console.log(counter)

//  ------------------- methods
console.log('Object.keys(options): ', Object.keys(options))
console.log('Object.keys(options).length: ', Object.keys(options).length)
options.makeTest()

//  ----------------- деструктизация

const { border, bg } = options.colors
console.log({ border, bg })