'use strict'

function toUpWord(title) {
    title = title.split(' ')
    title = title
        .map((word) => {
            return word[0].toUpperCase() + word.slice(1).toLowerCase()
        })
        .join(' ')

    return title
}

console.log(toUpWord('a clash of KINGS rgth rgte ww efSSSAAdgg 4'))