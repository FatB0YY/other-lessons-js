'use strict'

// забыл преобразовать тип в нумбер
// function iqTest(numbers) {
//     let arr = numbers.split(' ')

//     let X = 0
//     let Y = 0
//     let Z = 0

//     arr.forEach((num) => {
//         num % 2 === 0 ? X++ : Y++
//     })

//     if (X < Y) {
//         arr.filter((num, i) => {
//             if (num % 2 === 0) {
//                 console.log(`четный ${num}, индекс ${i}, позиция ${i + 1}`)
//                 Z = i + 1
//             }
//         })
//     } else {
//         arr.filter((num, i) => {
//             if (!(num % 2 === 0)) {
//                 console.log(`нечетный ${num}, индекс ${i}, позиция ${i + 1}`)
//                 Z = i + 1
//             }
//         })
//     }

//     return Z
// }

function iqTest(numbers) {
    numbers = numbers.split(' ').map(function(el) {
        return parseInt(el)
    })

    let odd = numbers.filter(function(el) {
        return el % 2 === 1
    })

    let even = numbers.filter(function(el) {
        return el % 2 === 0
    })

    return odd.length < even.length ?
        numbers.indexOf(odd[0]) + 1 :
        numbers.indexOf(even[0]) + 1
}

console.log(iqTest('2 4 7 8 10'))