'use strict'

// function maxSequence(arr) {
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j <= arr.length; j++) {
//             let currentSeq = arr.slice(i, j)
//             let currentSum = currentSeq.reduce(function(a, b) {
//                 return a + b
//             }, 0)
//             if (currentSum > max) {
//                 max = currentSum
//             }
//         }
//     }
//     return max
// }

let maxSequence = function(arr) {
    let min = 0,
        ans = 0,
        i = 0,
        sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
        min = Math.min(sum, min)
        ans = Math.max(ans, sum - min)
    }
    return ans
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))