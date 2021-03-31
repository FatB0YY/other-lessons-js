'use strict'
const defaultB = 30
const getDefault = (c) => c * 2

function compute(a = 0, b = getDefault(10)) {
    return a + b
}

console.log(compute(10)) // Nan