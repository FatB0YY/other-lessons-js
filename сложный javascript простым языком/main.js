'use strict'
// localStorage
//только строки !

const myNumber = 42
    // setItem() запись
localStorage.setItem('number', myNumber.toString())
    // getItem() получаем
console.log(localStorage.getItem('number'))
    // удаляем
localStorage.removeItem('number')
    // полностью очищаем
localStorage.clear()

const object = {
        name: 'Max',
        age: 19,
    }
    //JSON.stringify(object) делает строку
localStorage.setItem('person', JSON.stringify(object))

// из строки в object
const raw = localStorage.getItem('person')
console.log(typeof JSON.parse(raw))
const person = JSON.parse(raw)
person.name = 'Rodion'
console.log(person)

////////////////////////////
// другиее вкладки
window.addEventListener('storage', (event) => {
    console.log(event)
})

//window.onstorage = () => {}

///////////////////////////
/*
localStorage намного объемнее чем cookie,
обычно 5 мб
localStorage не улетает с куками на сервак, только локальное хранилище
*/