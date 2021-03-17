'use strict'

const arr = [78, 56, 232, 12, 8]

function findSmallerstInt(args) {
    let min = args[0]

    for (let i = 0; i < args.length; i++) {
        if (args[i] < min) min = args[i]
    }
    return min

    // return Math.min(...args)
}

// findSmallestInt(args) {
//     var min = Number.POSITIVE_INFINITY;
//     args.forEach((value,index)=>{
//        if(value < min) min = value;
//     });
//     return min;
// }

console.log(findSmallerstInt(arr))