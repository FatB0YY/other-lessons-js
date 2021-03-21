'use strict'

// function countSmileys(arr) {
//     let smileAll = 0

//     arr.forEach((item) => {
//         if (item.length === 3) {
//             if (
//                 (item[0].includes(';') || item[0].includes(':')) &&
//                 (item[1].includes('-') || item[1].includes('~')) &&
//                 (item[2].includes(')') || item[2].includes('D'))
//             ) {
//                 smileAll++
//             }
//         } else if (item.length === 2) {
//             if (
//                 (item[0].includes(';') || item[0].includes(':')) &&
//                 (item[1].includes(')') || item[1].includes('D'))
//             ) {
//                 smileAll++
//             }
//         }
//     })

//     return smileAll
// }

function countSmileys(arr) {
    return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length
}
// Метод test() выполняет поиск сопоставления регулярного выражения указанной строке. Возвращает true или false.

//const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);

console.log(countSmileys([':D', ':~)', ';~D', ':)']))