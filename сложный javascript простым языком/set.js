'use strict'
// set

const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])
    //без дубликатов
console.log(set)

set.add(10).add(5)
set.has(2)
set.size
set.delete(1)
    //set.clear()

set.values()
set.keys()

for (let key of set) {
    console.log('key: ', key)
}
/////////===============

function uniqValues(array) {
    return Array.from(new Set(array))
}
console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 5, 6]))