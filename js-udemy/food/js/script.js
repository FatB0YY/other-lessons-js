'use strict'
document.addEventListener('DOMContentLoaded', () => {
        function initTab() {
            const tabs = document.querySelectorAll('.tabheader__item')
            const tabsContent = document.querySelectorAll('.tabcontent')
            const tabsParent = document.querySelector('.tabheader__items')

            function hideTabContent() {
                tabsContent.forEach((item) => {
                    item.classList.add('hide')
                    item.classList.remove('show', 'fade')
                })

                tabs.forEach((item) => {
                    item.classList.remove('tabheader__item_active')
                })
            }

            function showTabContent(i = 0) {
                tabsContent[i].classList.add('show', 'fade')
                tabsContent[i].classList.remove('hide')
                tabs[i].classList.add('tabheader__item_active')
            }

            hideTabContent()
            showTabContent()

            tabsParent.addEventListener('click', (event) => {
                const target = event.target
                if (target && target.classList.contains('tabheader__item')) {
                    tabs.forEach((item, idx) => {
                        if (target == item) {
                            hideTabContent()
                            showTabContent(idx)
                        }
                    })
                }
            })
        }

        function iniSetTimeout(time = 5) {
            time *= 1000
            const timerId = setTimeout(() => {
                console.log('hello')
            }, time)
        }

        function initTimer() {
            const deadline = '2021-05-11'

            // разница между deadline и нашем текущем времени
            function getTimeRemaining(endtime = 0) {
                const t = Date.parse(endtime) - Date.parse(new Date())
                const days = Math.floor(t / (1000 * 60 * 60 * 24))
                const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
                const minutes = Math.floor((t / 1000 / 60) % 60)
                const seconds = Math.floor((t / 1000) % 60)

                return {
                    total: t,
                    days,
                    hours,
                    minutes,
                    seconds,
                }
            }

            // добавление 0
            function getZero(num = 0) {
                if (num >= 0 && num < 10) {
                    return `0${num}`
                } else {
                    return num
                }
            }

            // установка времени
            function setClock(selector, endtime = 0) {
                const timer = document.querySelector(selector)
                const days = timer.querySelector('#days')
                const hours = timer.querySelector('#hours')
                const minutes = timer.querySelector('#minutes')
                const seconds = timer.querySelector('#seconds')
                const timeInterval = setInterval(updateClock, 1000)

                updateClock()

                function updateClock() {
                    const t = getTimeRemaining(endtime)

                    days.innerHTML = getZero(t.days)
                    hours.innerHTML = getZero(t.hours)
                    minutes.innerHTML = getZero(t.minutes)
                    seconds.innerHTML = getZero(t.seconds)

                    if (t.total <= 0) {
                        clearInterval(timeInterval)
                    }
                }
            }

            setClock('.timer', deadline)
        }

        function initModal() {
            const modalOverlay = document.querySelector('.modal-overlay')
        }

        initTab()
        iniSetTimeout(2) // через сколько секунд вывести
        initTimer()
            // initModal()
    })
    // 1) кнопки открытия
    // 2) кнопки закрытия
    // 3) модальное окно (modal)
    // 4) overlay модалки

class Modal {
    constructor(modalOpenButtons, modalCloseButtons, modal, overlay) {
        this.modalOpenButtons = modalOpenButtons
        this.modalCloseButtons = modalCloseButtons
        this.modal = modal
        this.overlay = overlay

        this.addListeners()
    }

    addListeners() {
        const modalOpenButtons = document.querySelectorAll(
            this.modalOpenButtons
        )
        const modalCloseButtons = document.querySelectorAll(
            this.modalCloseButtons
        )
        const modal = document.querySelector(this.modal)
        const overlay = document.querySelector(this.overlay)

        modalOpenButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.openModal(modal)
            })
        })

        modal.addEventListener('click', (event) => {
            const target = event.target
            modalCloseButtons.forEach((btn) => {
                if (target === btn || target === overlay) {
                    this.closeModal(modal)
                }
            })
        })
    }

    openModal(modal) {
        modal.classList.remove('hide')
        modal.classList.add('open')
        document.addEventListener(
            'keydown',
            (event) => {
                this.escapeHandler(event, modal)
            }, { once: true }
        )
    }

    closeModal(modal) {
        modal.classList.remove('open')
        modal.classList.add('hide')
        setTimeout(() => {
            modal.classList.remove('hide')
        }, 250)
    }

    escapeHandler(event, modal) {
        let keyCode = event.keyCode
        if (event.code === 'Escape' || keyCode === 27 || keyCode === '27') {
            this.closeModal(modal)
        }
    }
}

const modal1 = new Modal(
    'button[data-modal="true"]',
    'button[data-close="true"], div[data-close="true"]',
    '.modal',
    '.modal-overlay'
)