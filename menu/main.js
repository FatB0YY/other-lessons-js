'use strict'

document.addEventListener('DOMContentLoaded', function() {
    let iconMenu = document.querySelector('.icon-menu')
    let menuBody = document.querySelector('.menu-body')
    let body = document.querySelector('body')
    let shadow = document.querySelector('.shadow')
    let boolMenu = false
    let listMb = document.querySelector('.list_mb')

    let listLink = document.querySelectorAll('.list-link')

    iconMenu.addEventListener('click', function() {
        if (boolMenu === false) {
            addClass()
        } else if (boolMenu === true) {
            removeClass()
        }
    })
    shadow.addEventListener('click', function() {
        if (boolMenu === false) {
            addClass()
        } else if (boolMenu === true) {
            removeClass()
        }
    })

    const escapeHandler = (event) => {
        let keyCode = event.keyCode
        if (event.code === 'Escape' || keyCode === 27 || keyCode === '27') {
            removeClass()
        }
    }

    const addClass = () => {
        iconMenu.classList.add('active')
        menuBody.classList.add('active')
        shadow.classList.add('active')
        body.classList.add('lock')
        listMb.classList.add('active')

        listLink.forEach((item, i) => {
            setTimeout(() => {
                item.classList.add('active')
            }, 100 * i)
        })

        boolMenu = true
        iconMenu.disabled = true
        setTimeout(() => {
            iconMenu.disabled = false
        }, 400)
        document.addEventListener('keydown', escapeHandler)
    }
    const removeClass = () => {
        iconMenu.classList.remove('active')
        menuBody.classList.remove('active')
        shadow.classList.remove('active')
        body.classList.remove('lock')
        listMb.classList.remove('active')

        listLink.forEach((item, i) => {
            setTimeout(() => {
                item.classList.remove('active')
            }, 400)
        })

        boolMenu = false
        iconMenu.disabled = true
        setTimeout(() => {
            iconMenu.disabled = false
        }, 400)
        document.removeEventListener('keydown', escapeHandler)
    }
})

// setTimeout(() => {
//     modal.classList.remove('hide')
// }, 250)