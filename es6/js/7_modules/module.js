'use strict'

const privateVarieble = 42

const COLOR = '#bababa'

export function compute(a, b) {
    return a + b
}

export default {
    log() {
        console.log(privateVarieble)
    },
}