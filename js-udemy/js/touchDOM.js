'use strict'

// touchstart при возникновении касания к этому элементу
// touchmove при движении
// touchend при оторвании пальца от элемеента
// touchenter когда ведем пальцем по экрану и наскакиваем на элемент на который навешено это событие
// touchleave тоже самое, только ушел за пределы этого элемента
// touchcancel когда точно соприкосновения больше не регестрируется на поверхносмти

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box2')
    box.addEventListener('touchend', (event) => {
        event.preventDefault()
        console.log('Start', event)
    })
})

// --------------

//touches список всехх пальцев которыми пользователь тапнул
// targetTouches
// changedTaches
//http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya
// hover js
//https://habr.com/ru/company/sibirix/blog/227175/