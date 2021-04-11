'use strict'
const box = document.getElementById('box')
console.log(box)

const boxs = document.getElementsByTagName('button')
console.log(boxs)
console.log(boxs[1])

const circles = document.querySelectorAll('.circle') // доступны методы foreach
console.log(circles)
circles.forEach((item) => {
    console.log('item:', item)
    item.style.backgroundColor = 'pink'
})

// --------------
const height = 50
box.style.cssText = `background-color: green; height: ${height}px`

// -------------

const div = document.createElement('div')
const div2 = document.createElement('div')
const text = document.createTextNode('Тут был я') //#text "Тут был я"
console.log(text)

// ------------
div.classList.add('black')
div2.classList.add('orange')
const wrapper = document.querySelector('.wrapper')

wrapper.append(div)
wrapper.append(div2) // добавление элемента вконец .wrapper
    // wrapper.prepend(div) // добавление элемента вначало .wrapper

// ------------
// before
// after
// remove
// replaceWith() замена элемента
// removeChild
// replaceChild

// -----------

div.innerHTML = `<h3>Hello World !</h3>`
div2.textContent = 'Text' // только текст

// ------------

div2.insertAdjacentHTML('beforeend', `<h3>insertAdjacentHTML</h3>`)