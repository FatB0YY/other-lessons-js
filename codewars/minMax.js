'use strict'

function minMax(arr) {
    let maxMin = `${Math.min(...arr)}, ${Math.max(...arr)}`
    maxMin = maxMin.split(',')
    maxMin = maxMin.map((item) => Number(item))
    return maxMin

    //return [Math.min(...arr), Math.max(...arr)]; сразу в массиве кек
}

console.log(minMax([1, 2, 3, 4, 5]))