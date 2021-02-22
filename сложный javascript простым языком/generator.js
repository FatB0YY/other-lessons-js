'use strict'

//Symbol iterator

function* strGenerator() {
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGenerator()
    // str.next()

///////

function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}
const num = numberGen(7)
    // num.next()

///////
const iterator = {
    gen(n = 3) {
        let i = 0
        return {
            next() {
                if (i < n) {
                    return {
                        value: ++i,
                        done: false,
                    }
                } else {
                    return {
                        value: undefined,
                        done: true,
                    }
                }
            },
        }
    },
}

//////////

/*
for (let key of 'Hello') {
    console.log(key)
}
for (let key of[1, 2, 3, 5, 8, 13]) {
    console.log(key)
}
*/

function* iter(n = 3) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}
for (let key of iter(6)) {
    console.log(key)
}