// нужен юзер
let user = {
    login: '',
    password: '',
    validatePassword: function() {
        if (this.password.length < 8) {
            return false
        } else return true
    },
}