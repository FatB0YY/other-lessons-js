'use strict'

function countSheeps(arrayOfSheep) {
    let res = arrayOfSheep.reduce((accumulator, item) => {
        if (item === true) {
            accumulator++
        }
        return accumulator
    }, 0)
    return res
}

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length
}

var array1 = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
]

console.log(countSheeps(array1))