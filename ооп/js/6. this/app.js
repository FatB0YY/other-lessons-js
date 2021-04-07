'use strict'
console.log(this)
window.console.log(window)

const b1 = document.querySelector('.b1')
b1.addEventListener('click', function() {
    console.log(this)
    this.style.background = 'green'
})

const b2 = document.querySelector('.b2')
b2.addEventListener('click', () => {
    // this теперь window
    console.log(this)
    this.style.background = 'red'
})

//this у стрелочных функций указывает не на глобальный контекст (здесь просто частный случай),
//а на лексическую область видимости той ф-ции,
//в которой она содержится

class U2 {
    constructor(model) {
        this.model = model
            // в this будет лежать создынный объект
            // дальше мы в объекте создаем model = model
    }
    showThis() {
            console.log('this: ', this)
        }
        //this: Object { model: "744" }
}
const boat = new U2('744')
console.log(boat)
boat.showThis()
    // this в ООП указывает на объект который будет создан
    // с помощью оператора new на основе данного класса