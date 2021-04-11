'use strict'

const personMovieDB = {
    count: 0,
    movies: {},
    achtors: {},
    genres: [],
    privet: false,

    start: function() {
        this.count = +prompt('Сколько фильмов посмотрели ?', '')
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов посмотрели ?', '')
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('послежний фильм', '')
            const b = prompt('оценка', '')

            if (a != null && b != null && a != '' && b != '') {
                personMovieDB.movies[a] = b // название: оценка || a: b в объекте
                console.log('done')
            } else {
                console.log('error')
                i--
            }
        }
    },

    showMyDB: function(hidden) {
        hidden ? console.log(this) : false
    },

    writeYourGenrse: function() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр № ${i + 1}`)

            if (genre === '' || genre == null) {
                console.log('error')
                i--
            } else {
                this.genres[i] = genre
            }
        }

        this.genres.forEach((film, idx) => {
            console.log(`Любимый жанр ${idx + 1} - это ${film}`)
        })
    },

    toggleVisibleMyDB: function() {
        this.privet ? (this.privet = false) : (this.privet = true)
    },
}