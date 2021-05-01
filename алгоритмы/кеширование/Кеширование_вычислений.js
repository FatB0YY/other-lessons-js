'use strict'

function cashFunction(fn) {
    const cash = {}
    return function(n) {
        if (cash[n]) {
            console.log('Из кеша', cash[n])
            return cash[n]
        }
        let result = fn(n)
        console.log('Из функции', result)
        cash[n] = result
        return result
    }
}

// const factorial = (n) => {
//     if (n === 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

function factorial(n) {
    let result = 1
    while (n != 1) {
        result *= n
        n -= 1
    }
    return result
}

const cashFactorial = cashFunction(factorial)
cashFactorial(5)
cashFactorial(4)
cashFactorial(5)
cashFactorial(5)
cashFactorial(4)
cashFactorial(2)