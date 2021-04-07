'use strict'

const b3 = document.querySelector('.b3')
b3.addEventListener('click', test)

function test(color) {
    console.log(this)
    this.style.background = color
}

// test() error, this = underfined

// метод Call()
// f.call(context, arg1, arg2)

// test.call(b3, orange) // сразу вызвал функцию, this = b3
// test.bind(b3, orange) // не вызывает сразу
// test.apply(b3, ['orange']) // сразу вызывает