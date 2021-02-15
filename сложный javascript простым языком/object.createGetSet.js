'use strict';

//object.createGetSet

const person = Object.create({
    // в данном параметре мы можешим создавать прототип нового созданного объекта person
    calculateAge() {
        console.log('Age: ', new Date().getFullYear() - this.dr);
    },
}, {
    name: {
        value: 'Rodion',
        //это все проперти дискрипторы
        //для того, чтобы поле name было видно в цикле for
        enumerable: true,
        // можно но ли изменять конкретные поля в данном объекте
        writable: true,
        // позволяет манипулировать с ключами данного объекта, можно ли удалять ключ из объекта
        configurable: true,
    },
    dr: {
        value: 2002,
        enumerable: false,
        writable: false,
        configurable: false,
    },
    age: {
        // геттеры и сеттереы
        // правило get нужно вернуть новое значение
        get() {
            return new Date().getFullYear() - this.dr;
        },
        set(value) {
            document.body.style.background = 'green';
            console.log('Set age', value);
            //person.age = 'etgrth'
        },
    },
});

person.name = 'Maxim';

for (let key in person) {
    // данный метод позволяет не пробегаться по прототипу
    // рекомендуется делать всегда, когда итерация с помощью йикла for in
    if (person.hasOwnProperty(key)) {
        console.log('Key:', key, person[key]);
    }
}