'use strict'

function removeSmallest(numbers) {
    let clone = Object.assign([], numbers)
    clone.splice(numbers.indexOf(Math.min(...numbers), 0), 1)
    return clone
}

// function removeSmallest(numbers) { мой способ удобнее для меня
//     let indexOfMin = numbers.indexOf(Math.min(...numbers));
//     return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
//   }

console.log(removeSmallest([2, 2, 1, 2, 1])) // 2221