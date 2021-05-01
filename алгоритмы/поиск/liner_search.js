'use strict'

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]
let count = 0

// линейный поиск эл в массиве
function linerSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i
        }
    }
    return null
}
console.log(linerSearch(array, 2))
console.log('count:', count)