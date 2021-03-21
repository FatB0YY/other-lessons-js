'use strict'

function descendingOrder(n) {
    return parseInt(
        String(n)
        .split('')
        .sort((a, b) => b - a)
        .join('')
    )
}

// function descendingOrder(n) {
//     return parseInt(String(n).split('').sort().reverse().join(''))
// }

console.log(descendingOrder(2110))