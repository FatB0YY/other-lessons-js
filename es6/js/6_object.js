'use strict'

const cityField = 'city'

const job = 'frontend'

const person = {
    age: 26,
    name: 'Irina',
    job,
    [cityField + Date.now()]: 'Kazan', // динамика
    country: 'Russia',
    print: () => 'Person',
    toString() {
        return Object.keys(this)
            .filter((key) => key !== 'print' && key !== 'toString')
            .map((key) => this[key])
            .join(' ')
    },
}
console.log(person.toString())
console.log(person.print())

// Methods
const first = { a: 1 }
const second = { b: 2 }
console.log(Object.is(20, 20)) //сравниваем на эквивалентноть
    //  изменяет объект first
console.log(Object.assign(first, second)) // позволяет объеденять определнные объекты //Object { a: 1, b: 2 }
    // не изменяем первый объект
console.log(Object.assign({}, first, { c: 2, d: 3 }))

const obj = Object.assign({}, first, { c: 2, d: 3 })
console.log(obj)
console.log(Object.entries(obj)) // двумерный массив из двух лементов ключ значение
console.log(Object.keys(obj))
console.log(Object.values(obj))