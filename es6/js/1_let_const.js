'use strict'

// var num = 42
// num = 'str'
// console.log(num)

// if (true) {
//     var a = 42 // глобальгная переменная
// }
// console.log(a)

// let a = 24
// if (true) {
//     let a = 42
//     console.log(a)
// }
// console.log(a)

//Hoisting ------------------------------
// console.log(b) // underfineed
// var b = 10

// b = 20
// console.log(b) // 20
// var b = 10

// console.log(b) // ошибка
// let b = 20

// function hoisted() {
//     age = 18
// }
// let age
// console.log(age) // undefined
// hoisted()
// console.log(age) // 18

// Const ------------------------------
// const COLOR = '#000'
// COLOR = '#fff'
// console.log(COLOR) // error

// const array = [1, 2, 3, 5, 8]
//     // array = '12' // error, однако
// console.log(array)
// array.push('12')
// console.log(array) // можем менять

// const obj = { banana: 1, orange: 2, meat: 4 }
// console.log(obj)
// obj.name = 'Пётр'
// console.log(obj) // можем менять