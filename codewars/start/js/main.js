'use strict'

function titleCase(title, minorWords) {
    if (typeof minorWords !== 'undefined') {
        minorWords = minorWords.toLowerCase().split(' ')
    } else {
        minorWords = []
    }

    return title
        .toLowerCase()
        .split(' ')
        .map(function(v, i) {
            if (v != '' && (minorWords.indexOf(v) === -1 || i == 0)) {
                v = v.split('')
                v[0] = v[0].toUpperCase()
                v = v.join('')
            }
            return v
        })
        .join(' ')
}

console.log(
    titleCase('a clash of KINGS rgth rgte ww efSSSAAdgg 3 ', 'a rg rgth')
)