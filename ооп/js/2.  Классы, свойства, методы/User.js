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
}