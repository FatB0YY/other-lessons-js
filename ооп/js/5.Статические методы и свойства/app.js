'use strict'

class User {
    constructor(name) {
        this.name = name
    }
    static getRole(email) {
        // реализация
        return 'student'
    }
}

const person = new User('Ivan')
console.log(person)

// Alex -> перейти на форум
// role
// -> класс -> объект -> object.getRole()
console.log(User.getRole('ivan@ex'))
    // console.log(person.getRole()) error