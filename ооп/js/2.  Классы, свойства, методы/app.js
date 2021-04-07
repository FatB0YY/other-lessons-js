'use strict'

const a = new User('admin', 'adminName')
const b = new User('Ivan123457', 'gamer')

console.log(b)
console.log(b.validatePassword())

const Artem = new Student('password123', 'Artem', 'nickArtem')
console.log('Artem:', Artem)
console.log(Artem.getStudentCourses())
console.log(Artem.validatePassword())