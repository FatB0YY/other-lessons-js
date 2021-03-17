'use strict'

const a = 'xabc'
const b = 'abgc'

function longest(s1, s2) {
    let c = ''

    for (let i = 0; i < s1.length; i++) {
        if (!c.includes(s1[i])) {
            c += s1[i]
        }
    }

    for (let i = 0; i < s2.length; i++) {
        if (!c.includes(s2[i])) {
            c += s2[i]
        }
    }

    // алфавитный порядок
    return c.split('').sort().join('')
}
console.log(longest(a, b))

//Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
// s1 + s2 = Array(5) [ "x", "a", "b", "c", "g" ] т е все буквы
//sort() задает алфавитный порядок
//join() из массива в строку
const longest2 = (s1, s2) => {
    return [...new Set(s1 + s2)].sort().join('')
}
console.log(longest2(a, b))

// то же самое
const longest3 = (s1, s2) => {
    return Array.from(new Set(s1 + s2))
        .sort()
        .join('')
}
console.log(longest3(a, b))