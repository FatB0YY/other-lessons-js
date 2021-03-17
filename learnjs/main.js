'use strict'
let result = условие ? значение1 : значение2
    //if и название
let accessAllowed = age > 18 ? true : false
    // то же самое
let accessAllowed = age > 18

result = a !== null && a !== undefined ? a : b
    //result = a ? ? b

// showMessage(..) // показывает сообщение
// getAge(..) // возвращает возраст (в каком либо значении)
// calcSum(..) // вычисляет сумму и возвращает результат
// createForm(..) // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false

// функции
//
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}
ask(
        'Вы согласны?',
        function() {
            alert('Вы согласились.')
        },
        function() {
            alert('Вы отменили выполнение.')
        }
    )
    //
let age = prompt('Сколько Вам лет?', 18)
let welcome =
    age < 18 ?

    function() {
        alert('Привет!')
    } :
    function() {
        alert('Здравствуйте!')
    }
welcome() // теперь всё в порядке
    //
let age = prompt('Сколько Вам лет?', 18)
let welcome = age < 18 ? () => alert('Привет') : () => alert('Здравствуйте!')
welcome() // теперь всё в порядке
    //

describe('pow', function() {
        it('возводит в степень n', function() {
            assert.equal(pow(2, 3), 8)
        })
    })
    // Пишется начальная спецификация с тестами, проверяющими основную функциональность.
    // Создаётся начальная реализация.
    // Для запуска тестов мы используем фреймворк Mocha (подробнее о нём чуть позже). Пока функция не готова, будут ошибки. Вносим изменения до тех пор, пока всё не начнёт работать так, как нам нужно.
    // Теперь у нас есть правильно работающая начальная реализация и тесты.
    // Мы добавляем новые способы использования в спецификацию, возможно, ещё не реализованные в тестируемом коде. Тесты начинают «падать» (выдавать ошибки).
    // Возвращаемся на шаг 3, дописываем реализацию до тех пор, пока тесты не начнут завершаться без ошибок.
    // Повторяем шаги 3-6, пока требуемая функциональность не будет готова.
    //

///
// объекты
let fruit = 'apple'
let bag = {
    [fruit + 'Computers']: 5, // bag.appleComputers = 5
}
console.log(bag.appleComputers)
    //
let user = { name: 'John', age: 30 }
alert('age' in user) // true, user.age существует
alert('blabla' in user) // false, user.blabla не существует
    //
for (let prop in obj) {}
for (let key in user) {
    // ключи
    alert(key) // name, age, isAdmin
        // значения ключей
    alert(user[key]) // John, 30, true
}
//
// Math.trunc - встроенная функция, которая удаляет десятичную часть
alert(String(Math.trunc(Number('49')))) // "49", то же самое ⇒ свойство целочисленное
alert(String(Math.trunc(Number('+49')))) // "49", не то же самое, что "+49" ⇒ свойство не целочисленное
alert(String(Math.trunc(Number('1.2')))) // "1", не то же самое, что "1.2" ⇒ свойство не целочисленное
    //
let codes = {
    '+49': 'Германия',
    '+41': 'Швейцария',
    '+44': 'Великобритания',
    // ..,
    '+1': 'США',
}
for (let code in codes) {
    alert(+code) // 49, 41, 44, 1
    alert(code) // 1, 41, 44, 49
}
//
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let sum = 0
for (let key in salaries) {
    sum += salaries[key]
}
alert(sum) // 390

//
let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
}
const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }
}
multiplyNumeric(menu)
console.log(menu)
    //
    //дублировать объект? Создать независимую копию, клон?
let user = {
    name: 'Иван',
    age: 30,
}
let clone = {} // новый пустой объект
    // скопируем все свойства user в него
for (let key in user) {
    clone[key] = user[key]
}
// теперь в переменной clone находится абсолютно независимый клон объекта
clone.name = 'Пётр' // изменим в нём данные
alert(user.name) // в оригинальном объекте значение свойства `name` осталось прежним – Иван.
    //
Object.assign(dest, [src1, src2, src3]) // ...
    //Первый аргумент dest — целевой объект.
    //Остальные аргументы src1, ..., srcN (может быть столько, сколько нужно)) являются исходными объектами
    //Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest. То есть, свойства всех перечисленных объектов, начиная со второго, копируются в первый объект.
    //Возвращает объект dest.
    //
    //Например, объединим несколько объектов в один:
let user = { name: 'Иван' }
let permissions1 = { canView: true }
let permissions2 = { canEdit: true }
    // копируем все свойства из permissions1 и permissions2 в user
Object.assign //не делает глубокое клонирования объекта
Object.assign(user, permissions1, permissions2)
    // теперь user = { name: "Иван", canView: true, canEdit: true }
    //
    // «глубокое клонирование».
    //использовать готовую реализацию — метод _.cloneDeep(obj)  https://lodash.com/docs#cloneDeep из JavaScript-библиотеки lodash https://lodash.com/
    //
    //this
user = {
        name: 'rodion',
        age: 18,
        sayHi() {
            console.log('Hi ', this.name, ' тебе ', this.age, ' лет ')
        },
    }
    //
let user = { name: 'Джон' }
let admin = { name: 'Админ' }

function sayHi() {
    alert(this.name)
}
// используем одну и ту же функцию в двух объектах
user.f = sayHi
admin.f = sayHi
    // вызовы функции, приведённые ниже, имеют разное значение this
    // "this" внутри функции является ссылкой на объект, который указан "перед точкой"
user.f() // Джон  (this == user)
admin.f() // Админ  (this == admin)
admin['f']() // Админ (неважен способ доступа к методу - через точку или квадратные скобки)
    //Правило простое: при вызове obj.f() значение this внутри f равно obj. Так что, в приведённом примере это user или admin.
    //
;
(method = obj.go)() // underfined
//
method = obj.go
method() // правильно
    //
let calculator = {
    read() {
        this.one = Number(prompt('значение One = ', 0))
        this.two = Number(prompt('значение Two = ', 0))
    },
    sum() {
        return this.one + this.two
    },
    mul() {
        return this.one * this.two
    },
}
calculator.read()
console.log('sum = ', calculator.sum())
console.log('mul = ', calculator.mul())
    //
let ladder = {
        step: 0,
        up() {
            this.step++
                return this //добавили
        },
        down() {
            this.step--
                return this //добавили
        },
        showStep: function() {
            // показывает текущую ступеньку
            alert(this.step)
            return this //добавили
        },
    }
    // ladder.up();
    // ladder.up();
    // ladder.down();
    // ladder.showStep(); // 1 теперь можем делать так:
ladder.up().up().down().showStep() // 1
    //
function User(name) {
    this.name = name
    this.isAdmin = false
}
let user1 = new User('Вася')
alert(user1.name) // Вася
alert(user1.isAdmin) // false
    //
let user = new(function() {
        this.name = 'Вася'
        this.isAdmin = false

        // ...другой код для создания пользователя
        // возможна любая сложная логика и выражения
        // локальные переменные и т. д.
    })()
    //Такой конструктор не может быть вызван дважды, так как он нигде не сохраняется, просто создаётся и тут же вызывается. Таким образом, такой метод создания позволяет инкапсулировать код, который создаёт отдельный объект, но без возможности его повторного использования.
    //
    //Используя специальное свойство new.target внутри функции, мы можем проверить, вызвана ли функция при помощи оператора new или без него.
function User(name) {
    if (!new.target) {
        // в случае, если вы вызвали без оператора new
        return new User(name) // ...добавим оператор new за вас
    }

    this.name = name
}
let vasya = User('Вася') // переадресовывает вызовы на new User
alert(vasya.name) // Вася
    //
function User(name) {
    this.name = name

    this.sayHi = function() {
        alert('Меня зовут: ' + this.name)
    }
}
let vasya = new User('Вася')
vasya.sayHi() // Меня зовут: Вася
    //
function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function() {
        this.value += Number(prompt('Число = ', 0))
    }
}
let accumulator = new Accumulator(1) // начальное значение 1
accumulator.read() // прибавит ввод prompt к текущему значению
accumulator.read() // прибавит ввод prompt к текущему значению
alert(accumulator.value) // выведет сумму этих значений
    //
    //Symbol()
let id = Symbol('id')
alert(id.toString()) // Symbol(id), теперь работает
    //
let user = {
    name: 'Вася',
}
let id = Symbol('id')
user[id] = 1
alert(user[id]) // мы можем получить доступ к данным по ключу-символу
    //
let id = Symbol('id')
let user = {
        name: 'Вася',
        [id]: 123, // просто "id: 123" не сработает
    }
    //
    // /Свойства, чьи ключи – символы, не перебираются циклом for..in.
    //  А вот Object.assign, в отличие от цикла for..in, копирует и строковые, и символьные свойства.
    //
    // читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for('id') // если символа не существует, он будет создан
    // читаем его снова в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for('id')
    // проверяем -- это один и тот же символ
alert(id === idAgain) // true
    //
    // получаем символ по имени
let sym = Symbol.for('name')
let sym2 = Symbol.for('id')
    // получаем имя по символу
alert(Symbol.keyFor(sym)) // name
alert(Symbol.keyFor(sym2)) // id
    // подробнее здесь https://tc39.es/ecma262/#sec-well-known-symbols
    //
    //Преобразование объектов в примитивы
let user = {
        name: 'John',
        money: 1000,

        [Symbol.toPrimitive](hint) {
            alert(`hint: ${hint}`)
            return hint == 'string' ? `{name: "${this.name}"}` : this.money
        },
    }
    // демонстрация результатов преобразований:
alert(user) // hint: string -> {name: "John"}
alert(+user) // hint: number -> 1000
alert(user + 500) // hint: default -> 1500
    //
    // Алгоритм преобразований к примитивам следующий:

//     Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует.
//     Иначе, если хинт равен "string"
//         происходит попытка вызвать obj.toString(), затем obj.valueOf(), смотря что есть.
//     Иначе, если хинт равен "number" или "default"
//         происходит попытка вызвать obj.valueOf(), затем obj.toString(), смотря что есть.
//
// типы данных
let n = 1.23456
alert(n.toFixed(2)) // 1.23
alert(7.3e9) // 7.3 миллиардов (7,300,000,000)
let ms = 1e-6 // шесть нулей, слева от 1 = 0.000001;
    //
    //Метод num.toString(base) возвращает строковое представление числа num в системе счисления base. base может варьироваться от 2 до 36 (по умолчанию 10).
let num = 255
alert(num.toString(16)) // ff
alert(num.toString(2)) // 11111111
    //
alert((123456).toString(36)) // 2n9c
    //
    // округление
Math.floor
    // Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
Math.ceil
    //Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
Math.round
    //Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
Math.trunc //(не поддерживается в Internet Explorer)
    //Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.
    //
let num = 12.34
alert(num.toFixed(1)) // "12.3"
    //
let sum = 0.1 + 0.2
alert(+sum.toFixed(2)) // 0.3
    // NaN
alert(isNaN('str')) // true
    //
let num = +prompt('Enter a number', '')
    // вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
alert(isFinite(num))
    //
    //Во всех других случаях Object.is(a, b) идентичен a === b.
    //
alert(parseInt('100px')) // 100
alert(parseFloat('12.5em')) // 12.5
alert(parseInt('12.3')) // 12, вернётся только целая часть
alert(parseFloat('12.3.4')) // 12.3, произойдёт остановка чтения на второй точке
alert(parseInt('a123')) // NaN, на первом символе происходит остановка чтения
    //
    // подробнее https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
    //
const sum = (a, b) => {
    return Number((a + b).toFixed(2))
}
let a = Number(prompt('число a = ', 0))
let b = Number(prompt('число b = ', 0))
console.log(sum(a, b))
    //
const readNumber = () => {
    let num
    do {
        num = prompt('Введите число', 0)
    } while (!isFinite(num)) // проверка на число

    if (num === null || num === '') return null

    return +num
}
alert(`Число: ${readNumber()}`)
    //
    // random
const random = (min, max) => {
    return Number((min + Math.random() * (max - min)).toFixed(0))
}
console.log(random(1, 10))
    //
    //random
const randomInteger = (min, max) => {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
}
console.log(randomInteger(1, 3))
    //
    //Строки
    //E