'use strict'

function count(string) {
    let k = {}
    string.split('').forEach((char) => {
        if (k[char]) {
            k[char]++
        } else {
            k[char] = 1
        }
    })
    return k
}

console.log(count('abaabbac')) // a: 4, b: 3, c: 1