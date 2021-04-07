class Student extends User {
    constructor(password, username, nickname) {
        super(password, username)
        this.nickname = nickname
    }
    getStudentCourses() {
        return [1, 2]
    }
    validatePassword() {
        // 9!!!
        super.validatePassword()
        if (this.password.length < 12) {
            return false
        } else return true
    }
}