'use strict'

class User {
    constructor() {
        // this._name = name //_name защищенное св-во
        // прямое обращние = плохой тон
    }
    set SetName(name) {
        this._name = name.trim().toLowerCase()
    }

    get GetName() {
        return this._name
    }
}

const student = new User()
    // student.setNameOnThisClass('   AlEx')
student.SetName = '   AlEx'
console.log(student.GetName)
    //student._name = 'Ivan' // плохой тон
console.log(student)