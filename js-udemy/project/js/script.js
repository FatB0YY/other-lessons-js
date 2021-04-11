'use strict'

document.addEventListener('DOMContentLoaded', () => {
    // массив фильмов
    const movieDB = {
        movies: [
            'Логан',
            'Лига справедливости',
            'Ла-ла лэнд',
            'Одержимость',
            'Скотт Пилигрим против супермена',
        ],
    }

    // добавление кнопки
    const promoAdv = document.querySelector('.promo__adv')
    promoAdv.insertAdjacentHTML(
        'beforeend',
        `<button id="btn">Удалить все</button>`
    )

    // гахождение этой кнопки
    const btn = promoAdv.querySelector('#btn')

    // удаление рекоамы по клику на кнопку и помледующее удаление слушателя
    btn.addEventListener('click', function deleteIMG() {
        const img = promoAdv.querySelectorAll('img')
        img.forEach((photo) => {
            photo.remove()
        })
        this.removeEventListener('click', deleteIMG)
    })

    // замена текста
    const promoGenre = document.querySelector('.promo__genre')
    promoGenre.textContent = 'драма'

    // замена backgroundImage
    const promoBg = document.querySelector('.promo__bg')
    promoBg.style.backgroundImage = `url('../img/bg.jpg') center center/cover no-repeat`

    // ul у списка фильмов
    const promoInteractiveList = document.querySelector(
        '.promo__interactive-list'
    )

    // чекаем клик на кнопку "подтвердить"
    const submitBtn = document.querySelector('#submitBtn')
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault() // убираем стандартное поведение
            //сортировка
        sortArray(movieDB.movies)
            // наш инпут, поле ввода
        const addingInput = document.querySelector('.adding__input')
            // текст инпута
        let textInput = addingInput.value
            // проверка на пустой инпут
        if (textInput == '' || textInput == null || !textInput.trim()) {
            alert('Введите фильм')
        } else {
            // checkbox
            const inputCheck = document.querySelector('#inputCheck')

            if (inputCheck.checked) {
                console.log('Сделать любымым фильмом')
                promoInteractiveList.innerHTML = ''
                movieDB.movies.push(textInput)
                renderMovies(movieDB.movies, promoInteractiveList, 21)
            } else {
                promoInteractiveList.innerHTML = ''
                movieDB.movies.push(textInput)
                renderMovies(movieDB.movies, promoInteractiveList, 21)
            }
        }
        // убираем текст из инпута
        addingInput.value = ''
    })

    // функция для рендера списка
    // movies - массив фильмов
    // parent - элемент, в который добавлять li фильмов
    // n - макс длина фильма слова
    function renderMovies(movies, parent, n) {
        movies.forEach((film, idx) => {
            let sliced = film.slice(0, n)
            parent.insertAdjacentHTML(
                'beforeend',
                `
            <li class="promo__interactive-item">
                <p>${idx + 1}</p>
                ${sliced.length < film.length ? (sliced += '...') : sliced}
                
                <div class="delete"></div>
            </li>
        `
            )
        })

        // удаление элемента
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove()
                movieDB.movies.splice(i, 1)
                promoInteractiveList.innerHTML = ''
                renderMovies(movies, parent, n)
            })
            sortArray(movies)
        })

        // сортировка
        sortArray(movies)
    }

    // сортировка
    function sortArray(arr) {
        return arr.sort()
    }

    // ---------------------

    // рендер списка фильмов
    renderMovies(movieDB.movies, promoInteractiveList, 21)

    //сортировка
    sortArray(movieDB.movies)
})