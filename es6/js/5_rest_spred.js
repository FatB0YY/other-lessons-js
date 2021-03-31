'use strict'

// Rest

// function average(arr) {
//     return (
//         arr.reduce((acc, item) => {
//             return (acc += item)
//         }, 0) / arr.length
//     )
// }
// console.log(average([10, 20, 30, 40, 50]))

// теперь мы хотим передавать параметры через ,
// будет ошибка, т,к мы не знаем сколько параметров будем принимать
// фикс:
// function average() {
//     console.log(arguments) // обьект
//     console.log(Array.from(arguments)) // уже массив
//     return (
//         // arguments это псевдомассив со всеми аргументами функции
//         Array.from(arguments).reduce((acc, item) => {
//             return (acc += item)
//         }, 0) / arguments.length
//     )
// }
// console.log(average(10, 20, 30, 40, 50))

// Rest
function average(a, b, ...args) {
    console.log('a = ', a, 'b = ', b)
    console.log('args = ', args) // массив
    return (
        // arguments это псевдомассив со всеми аргументами функции
        args.reduce((acc, item) => {
            return (acc += item)
        }, 0) / args.length
    )
}
console.log('average = ', average(10, 20, 30, 40, 50))

// Spread
const array = [1, 2, 3, 5, 8, 13]
console.log('...array = ', ...array) // разворачиаем массив
console.log('max = ', Math.max(...array))
console.log('max = ', Math.max.apply(null, array)) // раньше

const fib = [1, ...array]
console.log(fib)

// Destructuring
// const a = array[0]
// const b = array[1]

const [a, b = 0, ...c] = array
console.log([a, b, c]) // 1, 2

const [d, , f] = array
console.log([d, f]) // 1, 3

// Object !

const adress = {
    country: 'Russia',
    city: 'Moskow',
    street: 'Lenina',
    concat: function() {
        return `${this.country}, ${this.city}, ${this.street}`
    },
}

// const { city, country, street = 0, concat: adressConcat } = adress
// //console.log(city) // Moscow
// console.log(adressConcat.call(adress))
//     // console.log(adress.concat())

const { city, ...rest } = adress
console.log(city)
console.log(rest) //Object { country: "Russia", street: "Lenina", concat: concat() }

const newAdress = {...adress, street: 'Tverskya' } // именили street
console.log(newAdress) // просто копия
    // но Object { country: "Russia", city: "Moskow", street: "Tverskya", concat: concat() }