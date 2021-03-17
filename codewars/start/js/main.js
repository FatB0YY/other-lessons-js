'use strict'

const uniqueInOrder = (iterable) => {
    iterable = list(set(iterable))

    return sorted(iterable)
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))