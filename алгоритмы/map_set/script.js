'use strict'

const map = new Map()
const objKey = {
    id: 5,
}
map.set(objKey, 'testetsset')
console.log(map.get(objKey))

const set = new Set()
set.add(5)
set.add(5)
set.add(5)
set.add(5)
console.log(set)