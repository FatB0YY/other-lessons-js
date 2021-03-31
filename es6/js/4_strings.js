'use strict'

// '', '';
// ``
// const title = 'hello'

// const isVisible = () => Math.random() > 0.5

// const template = `
//     ${isVisible() ? `<p>Visible</p>` : ''}
//     <h1>${title}</h1>
// `
// console.log(template)

// // methods
const str = 'Hello'
console.log(str.startsWith('He')) // true
console.log(str.startsWith('he')) // false
console.log(str.endsWith('lo')) // true

console.log(str.includes('el')) // true

console.log(str.repeat(3)) // дублируем

console.log(str.trim()) // без пробелов

console.log(str.padStart(10, '*')) // минимальная длина (будет 5 ***)
console.log(str.padEnd(8, '-'))