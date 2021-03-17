const modal = () => {
    const cardDetailsButtonBuy = document.querySelector(
        '.card-details__button_buy'
    )
    const cardDetailsButtonDelivery = document.querySelector(
        '.card-details__button_delivery'
    )
    const modal = document.querySelector('.modal')
        // кнопочки и текст
    const modalSubtitle = document.querySelector('.modal__subtitle')
    const modalOverlay = document.querySelector('.modal-overlay')

    const openModal = (event) => {
        const target = event.target
        modal.classList.remove('hide')
        modal.classList.add('open')
        document.addEventListener('keydown', escapeHandler)
        modalSubtitle.textContent = target.dataset.buttonBuy
            // скрытый инпут
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

modal()