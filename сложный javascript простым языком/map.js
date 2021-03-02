'use strict'
// map
const obj = {
    name: 'Rodion',
    age: 18,
    job: 'Fullstack',
}

const entries = [
    ['name', 'Rodion'],
    ['age', 18],
    ['job', 'Fullstack'],
]

//entries() метод, который позволяет перевести объект в запись массива
// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

//map

const map = new Map(entries)
console.log(obj.name)
    // get() получить
console.log(map.get('name'))

// set() передать
map.set('newField', 42).set(obj, 'Value of object').set(NaN, 'NaN ??')

console.log(map)

console.log(map.get(obj))
console.log(map.get(NaN))
    // короче ключами могут являтся любые типы данных

//возвращает boolean
map.delete('job')
    // has() проверяет есть ли такой ключ
console.log(map.has('job'))

// сколько ключей
console.log(map.size)
    // очистить полность
    //map.clear()
console.log(map.size)
console.log('-------')
    //entries() возвращает данный массив, не обяз
for (let entry of map.entries()) {
    console.log(entry)
}
console.log('-------')
    // значения
for (let val of map.values()) {
    console.log(val)
}
console.log('-------')
    // ключи
for (let key of map.keys()) {
    console.log(key)
}
console.log('-------')

map.forEach((value, key, m) => {
    console.log(value, key)
})
console.log('-------')
console.log('-------')
    ////////////////////////

// быстро делаем массив из карты
// const array = Array.from(map)
//     // [...map]
// console.log(array)
// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

/////////////////////////////

const users = [{ name: 'Elena' }, { name: 'Alex' }, { name: 'Irina' }]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}
console.log(lastVisit(users[1]))