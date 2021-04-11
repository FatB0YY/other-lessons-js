'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.button')

    console.log(btns[0].classList.length)
    console.log(btns[0].classList.item(0)) // получает class под определенный индексом

    btns[0].classList.add('active')
    console.log('add', btns[0])
    btns[0].classList.remove('active')
    console.log('remove', btns[0])
    btns[0].classList.toggle('active')
    console.log('toggle', btns[0])
    btns[0].classList.toggle('active')
    console.log('toggle', btns[0])

    btns[0].classList.contains('active') ?
        console.log(true) :
        console.log(false)

    // --------- делегирование

    const btnsBlock = document.querySelector('.btns')
    btnsBlock.style.backgroundColor = 'green'

    btnsBlock.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'BUTTON') {
            console.log('button !!!')
        }
        //  или
        if (event.target && event.target.matches('button.red')) {
            console.log('button !!!')
        }
    })

    const btn = document.createElement('button')
    btn.classList.add('red')
    btnsBlock.append(btn) // помешаем в обертку
})