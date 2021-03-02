'use strict'
// arrays

const people = [
    { name: 'rodion', age: 18, budjet: 40000 },
    { name: 'nikita', age: 17, budjet: 30000 },
    { name: 'yana', age: 16, budjet: 20000 },
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

for (let person of people) {
    console.log(people)
}

// // каждый элемент
people.forEach((item, index, peopleArr) => {
    console.log(item, '|', index, '|', peopleArr)
})

// // возвращает другой массив
const newPeople1 = people.map((item, index, peopleArr) => {
    return `${item.name} (${item.age})`
})
console.log(newPeople1)

//фильтрует массив
// // возвращает другой массив
const adults = people.filter((item, index, peopleArr) => item.age <= 17)
console.log(adults)

//reduce
const amount = people.reduce((total, item) => {
    return total + item.budjet
}, 0)
console.log(amount)

// find
const rodion = people.find((item) => {
    return item.name === 'rodion'
})
console.log(rodion)

//FindIndex
//return index
const rodionIndex = people.findIndex((item) => {
    return item.name === 'rodion'
})
console.log(rodionIndex)

/////================
console.log('======================')

let newPeople2 = people
    .filter((item) => item.budjet > 20000)
    .map((item) => {
        return {
            info: `${item.name} (${item.age})`,
            budjet: item.budjet,
        }
    })

console.log(newPeople2)

newPeople2 = people.reduce((total, item) => {
    return total + item.budjet
}, 0)
console.log('total budjet (all): ', newPeople2)