'use strict'

const obj = {
    a: 5,
    b: 2,
    fg: {
        th: 6,
        rth: 7,
    },
}

const copyObj = obj // ссылка

copyObj.b = 3 // модифицируем obj

console.log('copyObj:', copyObj)
console.log('obj:', obj)

// ------------- copy obj поверхностная копия

function copy(obj) {
    let objCopy = {}
    for (let key in obj) {
        objCopy[key] = obj[key]
    }
    return objCopy
}

const c = copy(obj)
console.log('c:', c)

// ------------ Object.assign() объеденение объектов

const add = {
    mh: 8,
    rtyh: 665,
}

console.log(Object.assign(obj, add))
console.log(Object.assign({}, add)) //копия

// ------------ копирование массива
const oldArray = [1, 2, 3, 4, 5]
const newArry = oldArray.slice()
console.log('oldArray', oldArray)
console.log('newArry:', newArry)

// ---------- es6 es8 spread копирование
const video = ['youtube', 'videm']
const blogs = ['wp', 'blogger']
const internet = [...video, ...blogs, 'vk']
console.log(internet)

// -----------

const arr = ['a', 'b']
const newArr = [...arr]
console.log('newArr:', newArr)