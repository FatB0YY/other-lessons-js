'use strict'

class Person {
    type = 'human'

    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(this.name + ' говорит привет')
    }
}

const max = new Person('Max')
    // console.log(max)
    // max.greet()
    // console.log(max.type)

console.log(max.__proto__ === Person.prototype) // true

class Programmer extends Person {
    constructor(name, job) {
        super(name)

        this._job = job
    }

    get job() {
        return this._job.toUpperCase()
    }

    set job(job) {
        if (job.length < 2) {
            throw new Error('error')
        } else {
            this._job = job
        }
    }

    greet() {
        super.greet()
        console.log('Rewritten')
    }
}

const frontend = new Programmer('Max', 'frontend')
console.log(frontend)
frontend.greet()

console.log(frontend.job)
frontend.job = '1'
console.log(frontend.job)

// Static
class Util {
    static average(...args) {
        return args.reduce((acc, item) => (acc += item), 0) / args.length
    }
}

let res = Util.average(1, 1, 2, 3, 5, 8, 12)
console.log(res)

// const util = new Util()
// console.log(util.average(1, 1, 2, 3, 5, 8, 12))