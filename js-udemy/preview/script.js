'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box')

    // с border-box уже включаются вот сюда
    // const width = box.clientWidth
    // const height = box.clientHeight

    // const width = box.offsetWidth // 400
    // const height = box.offsetHeight // 350

    const width = box.scrollWidth // 383
    const height = box.scrollHeight // 1352

    console.log(width, height)

    // полный список
    const btn = document.querySelector('button')
    btn.addEventListener('click', () => {
        box.style.height = box.scrollHeight + 'px'
    })

    // координаты элемента на странице
    console.log(box.getBoundingClientRect())

    //стили которые были уже пременены
    // на прямую менять не можем
    const style = window.getComputedStyle(box)
    console.log(style)

    //мы не можем работь с псевдоэлементами, но можем получить их стили
    const style1 = window.getComputedStyle(box)
    console.log(style1)

    // cumputed стили это css
    // inline стили это js, они приоритетнее

    console.log(document.documentElement.clientHeight)
        // начало страиницы
    document.documentElement.scrollTop = 0

    // от 0 мы проскролим 400px
    window.scrollBy(0, 400)
        // относительно всей страницы
    window.scrollTo(0, 400)
})