'use strict'

const arr = [2, 13, 24, 55, 1, 8]
arr.sort(compareNum)
console.log(arr)

function compareNum(a, b) {
    return a - b
}