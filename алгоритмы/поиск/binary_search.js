'use strict'

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]
let count = 0

// бинарный поиск
function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = -1
    while (found === false && start <= end) {
        count += 1
        middle = Math.floor((start + end) / 2)
        if (array[middle] === item) {
            found = true
            position = middle
            return position
        }
        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

function binarySearchRecursion(array, item, start, end) {
    let middle = Math.floor((start + end) / 2)
    if (item === arrat[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return binarySearchRecursion(array, item, start, middle - 1)
    } else {
        return binarySearchRecursion(array, item, middle + 1, end)
    }
}

//console.log(binarySearch(array, 11))
console.log(binarySearchRecursion(array, 11, 0, array.length))
console.log('count:', count)