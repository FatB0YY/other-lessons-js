class User {
    constructor(password, username) {;
        (this.password = password), (this.username = username)
    }

    validatePassword() {
        console.log('work parent pass')
        if (this.password.length < 8) {
            return false
        } else return true
    }

    seyHello() {
        console.log(this.username + ' Hello')
        return this.username
    }
}

const alex = new User('rtjhtyj', 'alex')
alex.seyHello()

class Person extends User {
    constructor(password, username, name, email) {
            super(password, username)
            this.name = name
            this.email = email
        }
        // seyHello2() {
        //     console.log(super.username)
        //     return super.username
        // }
}

const ivan = new Person('password', 'ivanName', 'Ivan', '@thyth.ru')
console.log(ivan)
ivan.seyHello()
    // ivan.seyHello2()