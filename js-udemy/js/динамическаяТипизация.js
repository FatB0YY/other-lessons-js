'use strict'

// 1. string
const num = 5
console.log(typeof String(num)) // string

// 2. +
console.log(typeof(num + '')) // string

const size = 26 + 'px' // string
console.log(size)

// number
//1 +
console.log(typeof + '5') //number

// 2. Parse
console.log(typeof parseInt('15px', 10)) //number 10 система счисленич

// boolean
0, undefined, null, NaN, '' // false