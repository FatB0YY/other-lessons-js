'use strict'

const arr = [1, 2, 'a', 'b']

// function filter_list(l) {
//     return l.filter((item, i) => Number.isInteger(item))
// }

function filter_list(l) {
    return l.filter((item) => typeof item === 'number')
}

const result = filter_list(arr)

console.log(result)