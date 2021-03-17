'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const getData = (url, callback) => {
        // const request = new XMLHttpRequest()
        // request.open('GET', url)
        // request.send()

        // request.addEventListener('readystatechange', () => {
        //     if (request.readyState !== 4) return
        //     if (request.status === 200) {
        //         const response = JSON.parse(request.response)
        //         callback(response)
        //     } else {
        //         console.error(new Error('Error: ' + request.status))
        //     }
        // })

        fetch(url, callback)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(response.statusText)
            })
            .then(callback)
            .catch((err) => {
                console.log(err)
            })
    }

    const tabs = () => {
        const cardDetailChangeElems = document.querySelectorAll(
                '.card-detail__change'
            )
            //const cardDetailsTitile = document.querySelectorAll('.card-details__title')
        const cardDetailsTitile = document.querySelector('.card-details__title')
            //const cardImageElems = document.querySelectorAll('.card__image')
        const cardImageItem = document.querySelector('.card__image_item')
        const cardDetailsPrice = document.querySelector('.card-details__price')
        const descriptionMemory = document.querySelector('.description__memory')
            // const hideAll = () => {
            //     cardDetailChangeElems.forEach((item, i) => {
            //         item.classList.remove('active')
            //         cardDetailsTitile[i].classList.remove('active')
            //         cardImageElems[i].classList.remove('active')
            //     })
            // }

        // cardDetailChangeElems.forEach((item, i) => {
        //     item.addEventListener('click', () => {
        //         hideAll()
        //         item.classList.add('active')
        //         cardDetailsTitile[i].classList.add('active')
        //         cardImageElems[i].classList.add('active')
        //     })
        // })

        const data = [{
                name: 'Apple iPhone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                price: 95990,
                memoryROM: 128,
            },
            {
                name: 'Apple iPhone 12 Pro 256GB Silver',
                img: 'img/iPhone-silver.png',
                price: 97990,
                memoryROM: 256,
            },
            {
                name: 'Apple iPhone 12 Pro 516GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                price: 99990,
                memoryROM: 516,
            },
        ]

        const deactivate = () => {
            cardDetailChangeElems.forEach((btn, i) =>
                btn.classList.remove('active')
            )
        }

        cardDetailChangeElems.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                deactivate()
                if (!btn.classList.contains('active')) {
                    btn.classList.add('active')
                    cardDetailsTitile.textContent = data[i].name
                    cardImageItem.src = data[i].img
                    cardImageItem.alt = data[i].name
                    cardDetailsPrice.textContent = data[i].price + '₽'
                    descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memoryROM}ГБ`
                }
            })
        })
    }

    const accordion = () => {
        // const characteristicsTitle = document.querySelectorAll(
        //     '.characteristics__title'
        // )
        // const characteristicsDescription = document.querySelectorAll(
        //     '.characteristics__description'
        // )
        // characteristicsTitle.forEach((item, i) => {
        //     item.addEventListener('click', () => {
        //         item.classList.toggle('active')
        //         characteristicsDescription[i].classList.toggle('active')
        //     })
        // })

        const characteristicsItems = document.querySelectorAll(
            '.characteristics__item'
        )
        const characteristicsList = document.querySelector(
            '.characteristics__list'
        )

        characteristicsItems.forEach((item, i) => {
            if (item.children[1].classList.contains('active')) {
                item.children[1].style.height = `${item.children[1].scrollHeight}px`
            }
        })

        const open = (button, dropDown) => {
            closeAllDrops(button, dropDown)
            dropDown.style.height = `${dropDown.scrollHeight}px`
            button.classList.add('active')
            dropDown.classList.add('active')
        }
        const close = (button, dropDown) => {
            button.classList.remove('active')
            dropDown.classList.remove('active')
            dropDown.style.height = ''
        }

        const closeAllDrops = (button, dropDown) => {
            characteristicsItems.forEach((item, i) => {
                if (
                    item.children[0] !== button &&
                    item.children[1] !== dropDown
                ) {
                    close(item.children[0], item.children[1])
                }
            })
        }

        characteristicsList.addEventListener('click', (event) => {
                const target = event.target
                if (target.classList.contains('characteristics__title')) {
                    const parent = target.closest('.characteristics__item')
                    const description = parent.querySelector(
                        '.characteristics__description'
                    )
                    description.classList.contains('active') ?
                        close(target, description) :
                        open(target, description)
                }
            })
            //setTimeout(closeAllDrops, 5000)
    }

    const modal = () => {
        const cardDetailsButtonBuy = document.querySelector(
            '.card-details__button_buy'
        )
        const cardDetailsButtonDelivery = document.querySelector(
            '.card-details__button_delivery'
        )
        const modal = document.querySelector('.modal')
            // кнопочки и текст
        const modalTitle = document.querySelector('.modal__title')
        const modalSubtitle = document.querySelector('.modal__subtitle')
        const cardDetailsTitile = document.querySelector('.card-details__title')
            // скрытый инпут
        const modalTitleSubmit = document.querySelector('.modal__title-submit')
        const modalOverlay = document.querySelector('.modal-overlay')

        const openModal = (event) => {
            const target = event.target
            modal.classList.remove('hide')
            modal.classList.add('open')
            document.addEventListener('keydown', escapeHandler)
            modalTitle.textContent = cardDetailsTitile.textContent
            modalSubtitle.textContent = target.dataset.buttonBuy
                // скрытый инпут
            modalTitleSubmit.value = cardDetailsTitile.textContent
        }
        const closeModal = () => {
            modal.classList.remove('open')
            modal.classList.add('hide')
            setTimeout(() => {
                    modal.classList.remove('hide')
                }, 250)
                // удаляем событие !!!
            document.removeEventListener('keydown', escapeHandler)
        }
        const escapeHandler = (event) => {
            let keyCode = event.keyCode
            if (event.code === 'Escape' || keyCode === 27 || keyCode === '27') {
                closeModal()
            }
        }

        modal.addEventListener('click', (event) => {
            const target = event.target
            if (
                target.classList.contains('modal__close') ||
                target === modalOverlay
            ) {
                closeModal()
            }
        })
        cardDetailsButtonBuy.addEventListener('click', openModal)
        cardDetailsButtonDelivery.addEventListener('click', openModal)
    }

    const renderCrossSell = () => {
        const crossSellAdd = document.querySelector('.cross-sell__add')
        const crossSellList = document.querySelector('.cross-sell__list')
        const allGoods = []
            // рандом
        const shuffle = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1)) // случайный индекс от 0 до i
                    // поменять элементы местами
                    // мы используем для этого синтаксис "деструктурирующее присваивание"
                    // то же самое можно записать как:
                    // let t = array[i];
                    // array[i] = array[j];
                    // array[j] = t;
                ;
                [array[i], array[j]] = [array[j], array[i]]
            }
            return array
                // или return array.sort(() => Math.random() - 0.5)
        }

        const createCrossSellItem = (good) => {
            const { photo: picture, name, price } = good
            const liItem = document.createElement('li')
            liItem.innerHTML = `
            <article class="cross-sell__item">
                <img
                  class="cross-sell__image"
                  src="${picture}"
                  alt="${name}"
                />
                <h3 class="cross-sell__title">
                  ${name}
                </h3>
                <p class="cross-sell__price">${price}</p>
                <div class="button button_buy cross-sell__button">Купить</div>
              </article>
            `
            return liItem
        }

        const render = (arr) => {
            arr.forEach((item) => {
                crossSellList.append(createCrossSellItem(item))
            })
        }

        // паттрен обертки для колличсетва вывода функции
        const wrapper = (fn, count) => {
            let counter = 0
            return (...args) => {
                if (counter === count) return
                counter++
                return fn(...args)
            }
        }

        const wrapRender = wrapper(render, 2)

        const createCrossSellList = (goods) => {
            allGoods.push(...shuffle(goods))
                // ограничение 4 товара
            const fourItems = allGoods.splice(0, 4)

            wrapRender(fourItems)
        }

        crossSellAdd.addEventListener('click', () => {
            wrapRender(allGoods)
                // удаляем кнопку
                //crossSellAdd.remove()
        })

        // запускаем через сервер !
        getData('cross-sell-dbase/dbase.json', createCrossSellList)
    }

    tabs()
    accordion()
    modal()
    renderCrossSell()
    amenu(
            '.header__menu',
            '.header-menu__list',
            '.header-menu__item',
            '.header-menu__burger'
        )
        // анимации https://greensock.com/
        // для поддержки всего babel
})