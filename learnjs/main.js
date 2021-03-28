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
    //
lert("I'm the Walrus!") // I'm the Walrus!
    // получаем последний символ
alert(str[str.length - 1]) // o
    //
for (let char of 'Hello') {
    alert(char) // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
}
// поиск подстроки
let str = 'Ослик Иа-Иа посмотрел на виадук'
let target = 'Иа'
let pos = -1
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    alert(`Найдено тут: ${pos}`)
}
//
//Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.
//Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до (включительно) определённой позиции.
//
alert('Widget with id'.includes('Widget')) // true // есть ли подстрока. Необязательный второй аргумент str.includes позволяет начать поиск с определённой позиции:
alert('Widget'.startsWith('Wid')) // true, "Wid" — начало "Widget"
alert('Widget'.endsWith('get')) // true, "get" — окончание "Widget"
    //
    //Возвращает часть строки от start до (не включая) end. slice важнее
    //Например:
let str = 'stringify'
    // 'strin', символы от 0 до 5 (не включая 5)
alert(str.slice(0, 5))
    //
    //Также для start/end можно задавать отрицательные значения. Это означает, что позиция определена как заданное количество символов с конца строки:
let str = 'stringify'
    // начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
alert(str.slice(-4, -1)) // gif
    //
let str = 'stringify'
alert(str.substring(2, 6)) // "ring" Возвращает часть строки между start и end.
    //
let str = 'stringify'
    // ring, получаем 4 символа, начиная с позиции 2. Возвращает часть строки от start длины length.
alert(str.substr(2, 4))
    //
alert('a' > 'Z') // true
    //
str.codePointAt(pos)
    //Возвращает код для символа, находящегося на позиции pos:
    //
let str = ''
for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i)
}
alert(str)
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
    // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
    //
    // сравнение строк
    // Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:
    //    Отрицательное число, если str меньше str2.
    //    Положительное число, если str больше str2.
    //    0, если строки равны.
    //
alert('S\u0307\u0323') // Ṩ
alert('S\u0307\u0323'.normalize() == 'S\u0323\u0307'.normalize()) // true
    //str.trim() — убирает пробелы в начале и конце строки.
    //str.repeat(n) — повторяет строку n раз.
    // больше https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
    //
    // заглавная первая буква
const ucFirst = (str) => {
    if (!str) return str
    return str[0].toUpperCase() + str.slice(1)
}
alert(ucFirst('вася')) // Вася
    //
    // спам
const checkSpam = (str) => {
    let strCkech = str.toLowerCase()
    if (strCkech.includes('viagra') || strCkech.includes('xxx')) {
        return true
    } else return false
}
console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))
    //
    // усечение строки
const truncate = (str, maxlength) => {
        return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str
    }
    //
    // выделить число
function extractCurrencyValue(str) {
    return +str.slice(1)
}
//
// массивы
// очередь
//push добавляет элемент в конец.
//shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.
// стек
//push добавляет элемент в конец.
//pop удаляет последний элемент.
//
// /Методы, работающие с концом массива:
//pop Удаляет последний элемент из массива и возвращает его:
let fruits = ['Яблоко', 'Апельсин', 'Груша']
alert(fruits.pop()) // удаляем "Груша" и выводим его
alert(fruits) // Яблоко, Апельсин
    //
    //push Добавляет элемент в конец массива:
let fruits = ['Яблоко', 'Апельсин']
fruits.push('Груша')
alert(fruits) // Яблоко, Апельсин, Груша
    //
    //Методы, работающие с началом массива:
    //shift Удаляет из массива первый элемент и возвращает его:
let fruits = ['Яблоко', 'Апельсин', 'Груша']
alert(fruits.shift()) // удаляем Яблоко и выводим его
alert(fruits) // Апельсин, Груша
    //
    //unshift Добавляет элемент в начало массива:
let fruits = ['Апельсин', 'Груша']
fruits.unshift('Яблоко')
alert(fruits) // Яблоко, Апельсин, Груша
    //
    // /Методы push/pop выполняются быстро, а методы shift/unshift – медленно.
    //
    //В общем, не следует использовать цикл for..in для массивов.
    //
    //Таким образом, самый простой способ очистить массив – это arr.length = 0
    //
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
alert(matrix[1][1]) // 5, центральный элемент
    //
let arr = [1, 2, 3]
alert(arr) // 1,2,3
alert(String(arr) === '1,2,3') // true
    //
    // действие с массивом
const styles = ['Джаз', 'Блюз'] //Создайте массив styles с элементами «Джаз» и «Блюз».
styles.push('Рок-н-ролл') //Добавьте «Рок-н-ролл» в конец.
styles[Math.floor((styles.length - 1) / 2)] = 'Классика' //Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
console.log(styles.shift()) //Удалите первый элемент массива и покажите его.
styles.unshift('Рэп', 'Регги') //Вставьте «Рэп» и «Регги» в начало массива.
console.log(styles)
    //
    //Напишите функцию sumInput()
function sumInput() {
    let numbers = []
    while (true) {
        let value = prompt('Введите число', 0)
        if (value === '' || value === null || !isFinite(value)) break
        numbers.push(Number(value))
    }
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    return sum
}
console.log(sumInput())
    //
    // подмассив наибольшей суммы
function getMaxSubSum(arr) {
    let maxSum = 0
    let partialSum = 0

    for (let item of arr) {
        // для каждого элемента массива
        partialSum += item // добавляем значение элемента к partialSum
        maxSum = Math.max(maxSum, partialSum) // запоминаем максимум на данный момент
        if (partialSum < 0) partialSum = 0 // ноль если отрицательное
    }

    return maxSum
}
//
// методы массивов
// splice
arr.splice(index[, deleteCount, elem1, ..., elemN])
    //
let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент1
alert(arr); // осталось ["Я", "JavaScript"]
//
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");
alert(arr) // теперь ["Давай", "танцевать", "прямо", "сейчас"]
    //
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 2 первых элемента
let removed = arr.splice(0, 2);
alert(removed); // "Я", "изучаю" <-- массив из удалённых элементов
//
let arr = ["Я", "изучаю", "JavaScript"];
// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");
alert(arr); // "Я", "изучаю", "сложный", "язык", "JavaScript"
//         происходит попытка вызвать obj.
//
//slice
arr.slice([start], [end])
    //Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end). Оба индекса start и end могут быть отрицательными.
    //
let arr = ["t", "e", "s", "t"];
alert(arr.slice(1, 3)); // e,s (копирует с 1 до 3)
alert(arr.slice(-2)); // s,t (копирует с -2 до конца)
//Можно вызвать slice и вообще без аргументов: arr.slice() создаёт копию массива arr.Это часто используют, чтобы создать копию массива для дальнейших преобразований, которые не должны менять исходный массив.
//
// concat
//Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.
let arr = [1, 2];
// создать массив из: arr и [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4
//
//  методы
arr.indexOf(item, from) //ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
arr.lastIndexOf(item, from) //– то же самое, но ищет справа налево.
arr.includes(item, from) //– ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
    //
    // find
let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];
let user = users.find(item => item.id == 1);
alert(user.name); // Вася
//
// filter
let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];
// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2
//
// map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
//
// sort() По умолчанию элементы сортируются как строки.
// sort() для чисел
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
let arr = [1, 2, 15];
arr.sort(compareNumeric);
alert(arr); // 1, 2, 15
//
// или
arr.sort((a, b) => a - b);
//
// Метод arr.reverse меняет порядок элементов в arr на обратный.
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert(arr); // 5,4,3,2,1
//
// Метод str.split(delim) именно это и делает. Он разбивает строку на массив по заданному разделителю delim.
let names = 'Вася, Петя, Маша';
let arr = names.split(', ');
for (let name of arr) {
    alert(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
}
// второй аргумент
let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);
alert(arr); // Вася, Петя
//
// разбивка по букавам
let str = "тест";
alert(str.split('')); // т,е,с,т
//
// Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.
let arr = ['Вася', 'Петя', 'Маша'];
let str = arr.join(';'); // объединить массив в строку через ;
alert(str); // Вася;Петя;Маша
//
// reduce
let value = arr.reduce(function(previousValue, item, index, array) {
    // ...
}, [initial]);
//
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => {
    return sum + current
}, 0)
alert(result); // 15
//
// Array.isArray
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true
//
// thisArg
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};
let users = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];
let soldiers = users.filter(army.canJoin, army);
//
// БОЛЬШАЯ ШПАРГАЛКА ПО МАССИВАМ https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array

//Шпаргалка по методам массива:
//Для добавления/удаления элементов:
push(...items) //– добавляет элементы в конец,
pop() // – извлекает элемент с конца,
shift() // – извлекает элемент с начала,
unshift(...items) //– добавляет элементы в начало.
splice(pos, deleteCount, ...items) //– начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
slice(start, end) //– создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
concat(...items) // – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
    // Для поиска среди элементов:
indexOf / lastIndexOf(item, pos) //– ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
includes(value) // – возвращает true, если в массиве имеется элемент value, в противном случае false.
find / filter(func) //– фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
    // findIndex похож на find, но возвращает индекс вместо значения.
    //Для перебора элементов:
forEach(func) //– вызывает func для каждого элемента.Ничего не возвращает.
    // Для преобразования массива:
map(func) // – создаёт новый массив из результатов вызова func для каждого элемента.
sort(func) //– сортирует массив «на месте», а потом возвращает его.
reverse() // – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
    //split/join – преобразует строку в массив и обратно.
reduce(func, initial) //– вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
    //Дополнительно:
Array.isArray(arr) //проверяет, является ли arr массивом.
    //Обратите внимание, что методы sort, reverse и splice изменяют исходный массив.
    //
    // задачки на массивы
    // const camelize = (style) => {
    //         style = style.split('') // разбиваем
    //         let arr = style.filter((item, i) => {
    //             if (item !== '-') {
    //                 return item
    //             } else {
    //                 style[i + 1] = style[i + 1].toUpperCase()
    //             }
    //         })
    //         return arr.join('') // соединяем
    //     }
    // или
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => {
            if (index == 0) {
                return word
            } else {
                return word[0].toUpperCase() + word.slice(1)
            }
        })
        .join('')
}
console.log(camelize('background-color'));
//
const filterRange = (arr, a, b) => {
    return arr.filter((item) => {
            if (item >= a && item <= b) return item
        })
        //return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)
console.log(filtered)
    //

const filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if (val < a || val > b) {
            arr.splice(i, 1)
            i--
        }
    }
    // arr.forEach((item, i) => {
    //     let val = item

    //     if (val < a || val > b) {
    //         arr.splice(i, 1)
    //         i--
    //     }
    // })
}
let arr = [5, 3, 8, 1]
filterRangeInPlace(arr, 1, 4) // удалены числа вне диапазона 1..4
console.log(arr) // [3, 1]
    // по убыванию
let arr = [5, 2, 1, -10, 8]
arr.sort((a, b) => b - a)
    //
function copySorted(arr) {
    return arr.slice().sort()
}
let arr = ['HTML', 'JavaScript', 'CSS']
let sorted = copySorted(arr)
console.log(sorted)
console.log(arr)
    // калькулятор с конструктором, залупа которая не получилась
function Calculator() {
    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '*': (a, b) => a * b,
        '**': (a, b) => Math.pow(a, b),
    }
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN
        }
        return this.methods[op](a, b)
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func
    }
}
let calc = new Calculator()
let calc2 = new Calculator()
console.log(calc.calculate('3 + 7')) // 10
console.log(calc2.calculate('3 - 7')) // -4
console.log(calc2.calculate('3 * 7')) // 21
console.log(calc2.calculate('3 ** 7')) // 2187
console.log(calc2.calculate('6 / 2')) // 3
console.log(calc2.calculate('6 % 2')) // 0
    //
let vasya = { name: 'Вася', age: 25 }
let petya = { name: 'Петя', age: 30 }
let masha = { name: 'Маша', age: 28 }
let users = [vasya, petya, masha]
let names = users.map((obj) => {
    return obj.name
})
console.log(names) // Вася, Петя, Маша
    //
let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 }
let petya = { name: 'Петя', surname: 'Иванов', id: 2 }
let masha = { name: 'Маша', surname: 'Петрова', id: 3 }
let users = [vasya, petya, masha]
let usersMapped = users.map((user) => ({
    // создаем новый объект
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
}))
console.log(usersMapped)
console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // Вася Пупкин
    //
let vasya = { name: 'Вася', age: 25 }
let petya = { name: 'Петя', age: 30 }
let masha = { name: 'Маша', age: 28 }
let arr = [vasya, petya, masha]
const sortByAge = (arr) => {
    arr.sort((prev, next) => prev.age - next.age)
}
sortByAge(arr)
    // теперь: [vasya, masha, petya]
console.log(arr[0].name)
console.log(arr[1].name)
console.log(arr[2].name)
    //
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)) // случайный индекс от 0 до i
            // поменять элементы местами
            // мы используем для этого синтаксис "деструктурирующее присваивание"
            // то же самое можно записать как:
            // let t = array[i];
            // array[i] = array[j];
            // array[j] = t;
        ;
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
        // или return array.sort(() => Math.random() - 0.5)
}
let arr = [1, 2, 3]
shuffle(arr)
console.log(arr)
    //
let vasya = { name: 'Вася', age: 25 }
let petya = { name: 'Петя', age: 30 }
let masha = { name: 'Маша', age: 29 }
let arr = [vasya, petya, masha]
    // const getAverageAge = (arr) => {
    //     let sumAge = 0
    //     let i = 0
    //     arr.forEach((item) => {
    //         sumAge += item.age
    //         i++
    //     })
    //     let averageAge = sumAge / i
    //     return averageAge
    // }
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length
}
console.log(getAverageAge(arr)) // (25 + 30 + 29) / 3 = 28
    //
function unique(arr) {
    return [...new Set(arr)] //Array(3) [ "кришна", "харе", ":-O" ]
        //return [new Set(arr)] //Array [ Set(3) ]
        //return new Set(arr) //Array [ Set(3) ]
}
let strings = [
    'кришна',
    'кришна',
    'харе',
    'харе',
    'харе',
    'харе',
    'кришна',
    'кришна',
    ':-O',
]
console.log(unique(strings)) // кришна, харе, :-O
    //
    // перебор объектов Symbol.iterator
let range = {
        from: 1,
        to: 5,
    }
    // 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {
        // ...она возвращает объект итератора:
        // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
        return {
            current: this.from,
            last: this.to,
            // 3. next() вызывается на каждой итерации цикла for..of
            next() {
                // 4. он должен вернуть значение в виде объекта {done:.., value :...}
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ }
                } else {
                    return { done: true }
                }
            },
        }
    }
    // теперь работает!
for (let num of range) {
    console.log(num) // 1, затем 2, 3, 4, 5
}
//
let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ }
        } else {
            return { done: true }
        }
    },
}
for (let num of range) {
    alert(num) // 1, затем 2, 3, 4, 5
}
//
// Явный вызов итератора
let str = "Hello";
// делает то же самое, что и
// for (let char of str) alert(char);
let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // выводит символы один за другим
}
//
//Array.from
//Есть универсальный метод Array.from, который принимает итерируемый объект или псевдомассив и делает из него «настоящий» Array. После этого мы уже можем использовать методы массивов.
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};
let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (метод работает)
//
//Array.from(obj[, mapFn, thisArg])
//Необязательный второй аргумент может быть функцией, которая будет применена к каждому элементу перед добавлением в массив, а thisArg позволяет установить this для этой функции.
// range взят из примера выше
//
// возводим каждое число в квадрат
let arr = Array.from(range, num => num * num);
alert(arr); // 1,4,9,16,25
//
let str = '𝒳😂';
// разбивает строку на массив её элементов
let chars = Array.from(str);
alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2
//
//Технически это то же самое, что и:
let str = '𝒳😂';
let chars = []; // Array.from внутри себя выполняет тот же цикл
for (let char of str) {
    chars.push(char);
}
alert(chars);
//
// Map Set
// Методы и свойства:
// new Map()– создаёт коллекцию.
// map.set(key, value)– записывает по ключу key значение value.
// map.get(key)– возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key)– возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key)– удаляет элемент по ключу key.
// map.clear()– очищает коллекцию от всех элементов.
// map.size– возвращает текущее количество элементов.
//
let john = { name: "John" };
// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();
// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);
alert(visitsCountMap.get(john)); // 123
//
// Для перебора коллекции Map есть 3 метода:
//     map.keys() – возвращает итерируемый объект по ключам,
//     map.values() – возвращает итерируемый объект по значениям,
//     map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.
//
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50]
]);
// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // огурец, помидор, лук
}
// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}
// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    alert(entry); // огурец,500 (и так далее)
}
//
// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`); // огурец: 500 и так далее
});
//
//Так что мы можем создать Map из обычного объекта следующим образом:
let obj = {
    name: "John",
    age: 30
};
let map = new Map(Object.entries(obj));
//
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
// now prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2
//
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map.entries()); // make a plain object (*)
// готово!
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2
// let obj = Object.fromEntries(map); // убрать .entries()
//
// set
let set = new Set(["апельсин", "яблоко", "банан"]);
for (let value of set) alert(value);
// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
    alert(value);
});
//
// Отфильтруйте анаграммы
let array = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']
    // function aclean(arr) {
    //     let arr2 = arr.map((item) => {
    //         return item.toLowerCase().split('').sort().join('')
    //     })
    //     let set = new Set(arr2)
    //     return set
    // }
function aclean(arr) {
    let set = new Set()
    arr.forEach((item) => {
        let sorted = item.toLowerCase().split('').sort().join('')
        set.add(sorted, item)
    })
    return Array.from(set.values())
}
// function aclean(arr) {
//     let map = new Map()
//     for (let word of arr) {
//         // разбиваем слово на буквы, сортируем и объединяем снова в строку
//         let sorted = word.toLowerCase().split('').sort().join('') // (*)
//         map.set(sorted, word)
//     }
//     return Array.from(map.values())
// }
console.log(aclean(array))
    //
    // WeakMap и WeakSet
let messages = [
    { text: 'Hello', from: 'John' },
    { text: 'How goes?', from: 'John' },
    { text: 'See you soon', from: 'Alice' },
]
let arrayMes = new WeakSet()
arrayMes.add(messages[0])
arrayMes.add(messages[1])
arrayMes.add(messages[1])
    //Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
console.log(arrayMes)
console.log(messages)
    //
let messages = [
    { text: 'Hello', from: 'John' },
    { text: 'How goes?', from: 'John' },
    { text: 'See you soon', from: 'Alice' },
]
let arrDate = new WeakMap()
let now = new Date()
arrDate.set(messages[0], now)
arrDate.set(messages[1], now)
console.log(messages)
console.log(arrDate);
//
//Object.keys, values, entries
Object.keys(obj) //– возвращает массив ключей.
Object.values(obj) //– возвращает массив значений.
Object.entries(obj) //– возвращает массив пар[ключ, значение].
    //
let user = {
    name: "John",
    age: 30
};
Object.keys(user) // ["name", "age"]
Object.values(user) // ["John", 30]
Object.entries(user) // [["name", "John"], ["age", 30]];
    //
let user = {
    name: "John",
    age: 30
};
// перебор значений
for (let value of Object.values(user)) {
    alert(value); // John, затем 30
}
//
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};
let doublePrices = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries обратно объект
    Object
    .entries(prices)
    .map(([key, value]) => {
        return [key, value * 2]
    })
);
alert(doublePrices.meat); // 8
//
let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
}
const sumSalaries = (obj) => {
    let sum = 0
    for (let cache of Object.values(obj)) {
        sum += cache
    }
    return sum
}
console.log(sumSalaries(salaries)) // 650
    //
let user = {
    name: 'John',
    age: 30,
}
const count = (obj) => {
    console.log(Object.keys(obj))
    return Object.keys(obj).length
}
alert(count(user)) // 2
    //
    //еструктурирующее присваивание
    // у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"]
    // деструктурирующее присваивание
    // записывает firstName=arr[0], surname=arr[1]
let [firstName, surname] = arr;
alert(firstName); // Ilya
alert(surname); // Kantor
//
// второй элемент не нужен
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(title); // Consul
//
let [a, b, c] = "abc";
//
let [one, two, three] = new Set([1, 2, 3]);
//
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');
alert(user.name); // Ilya
//
const object1 = {
    a: 'somestring',
    b: 42
};
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
} // expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
//Object.entries()
//Object.entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in (разница в том, что for-in перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается Object.entries() не зависит от того как объект объявлен. Если существует необходимость в определенном порядке, то  массив должен быть отсортирован до вызова метода, например Object.entries(obj).sort((a, b) => a[0] - b[0]);.
//
let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
    alert(`${key}:${value}`); // name:John, затем age:30
}
//
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(name1); // Julius
alert(name2); // Caesar
// Обратите внимание, что `rest` является массивом.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
//
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let { title, width, height } = options;
alert(title); // Menu
alert(width); // 100
alert(height); // 200
//
let title, width, height;
// сейчас всё работает
({ title, width, height } = { title: "Menu", width: 200, height: 100 });
alert(title); // Menu
//
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
    title = "Untitled",
    width: w = 100, // width присваиваем в w
    height: h = 200, // height присваиваем в h
    items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
}) {
    alert(`${title} ${w} ${h}`); // My Menu 100 200
    alert(item1); // Item1
    alert(item2); // Item2
}
//
let user = {
    name: 'John',
    years: 30,
}
let { name, years: age, isAdmin = false } = user
console.log(name, age, isAdmin)
let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
}

function topSalary(salaries) {
    if (Object.keys(salaries).length === 0) {
        return null
    } else {
        let max = 0
        let name = ''
        for (const [key, value] of Object.entries(salaries)) {
            if (value > max) {
                max = value
                name = key
            }
        }
        return name
    }
}
console.log(topSalary(salaries));
//
//Дата и время
let now = new Date();
alert(now); // показывает текущие дату и время
//
//Формат JSON, метод toJSON
JSON.stringify //для преобразования объектов в JSON.
JSON.parse //для преобразования JSON обратно в объект.
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
let json = JSON.stringify(student);
//
let user = {
    sayHi() { // будет пропущено
        alert("Hello");
    },
    [Symbol("id")]: 123, // также будет пропущено
    something: undefined // как и это - пропущено
};
alert(JSON.stringify(user)); // {} (пустой объект)
//
//JSON.parse
let value = JSON.parse(str, [reviver]);
// str
//     JSON для преобразования в объект.
// reviver
//     Необязательная функция, которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение.
//
let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
alert(user.friends[1]); // 1
//
// Исключить обратные ссылки
let room = {
    number: 23
};
let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};
room.occupiedBy = meetup;
meetup.self = meetup;
alert(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));
/*
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
//
// Продвинутая работа с функциями
// рекурсия  //https://learn.javascript.ru/recursion
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}
//
let company = { // тот же самый объект, сжатый для краткости
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
// Функция для подсчёта суммы зарплат
function sumSalaries(department) { // сама функция
    if (Array.isArray(department)) { //если мы получили массив, то вернуть...
        return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // если мы получили не массив, а объект
        let sum = 0; // сумма изночадьно = 0
        for (let subdep of Object.values(department)) { // для итерации по значениям объекта: Object.values возвращает массив значений.
            sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
        }
        return sum;
    }
}
alert(sumSalaries(company)); // 6700
//
// Связанный список
// value,
// next – свойство, ссылающееся на следующий элемент связанного списка или null, если это последний элемент.
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
//Альтернативный код для создания:
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
//
//Список можно легко разделить на несколько частей и впоследствии объединить обратно:
let secondList = list.next.next;
list.next.next = null;
//Для объединения:
list.next.next = secondList;
//
//Например, для добавления нового элемента нам нужно обновить первый элемент списка:
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
// добавление нового элемента в список
list = { value: "new item", next: list };
//
// Чтобы удалить элемент из середины списка, нужно изменить значение next предыдущего элемента:
list.next = list.next.next;
//
// Списки могут быть улучшены:
//     Можно добавить свойство prev в дополнение к next для ссылки на предыдущий элемент, чтобы легко двигаться по списку назад.
//     Можно также добавить переменную tail, которая будет ссылаться на последний элемент списка (и обновлять её при добавлении/удалении элементов с конца).
//     …Возможны другие изменения: главное, чтобы структура данных соответствовала нашим задачам с точки зрения производительности и удобства.
// //
function sumTo(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

function sumTo(n) {
    return n === 1 ? 1 : n + sumTo(n - 1)
}

function sumTo(n) {
    return (n * (n + 1)) / 2
}
console.log(sumTo(100))
    //
function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1)
        //return n !== 1 ? n * factorial(n - 1) : 1
}
console.log(factorial(5))
    //
function fib(n) {
    let a = 0
    let b = 1
    for (let i = 0; i < n; i++) {
        a = a + b
        b = a - b
    }
    return a

    //return n <= 1 ? n : fib(n - 1) + fib(n - 2); // очень долго
}
console.log(fib(77))
    //
    //  которая выводит элементы списка по одному. список
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
}

function printList(list) {
    let tmp = list
    while (tmp) {
        console.log('tmp.value ', tmp.value)
        tmp = tmp.next
        console.log('tmp.next ', tmp.next)
    }
}
printList(list)
    //
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
}

function printReverseList(list) {
    let arr = []
    let tmp = list
    while (tmp) {
        arr.push(tmp.value)
        tmp = tmp.next
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i])
    }
}
printReverseList(list);
//
// Остаточные параметры и оператор расширения
// Остаточные параметры (...) Буквально это значит: «собери оставшиеся параметры и положи их в массив».
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15 (0, затем arr, затем 2, в конце arr2)
//
let str = "Привет";
alert([...str]); // П,р,и,в,е,т
//
let str = "Привет";
// Array.from преобразует перебираемый объект в массив
alert(Array.from(str)); // П,р,и,в,е,т
// Результат аналогичен [...str].
// Но между Array.from(obj) и [...obj] есть разница:
// Array.from работает как с псевдомассивами, так и с итерируемыми объектами
// Оператор расширения работает только с итерируемыми объектами
//
// Замыкание
function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}
const comUrl = urlGenerator('com') // передается замкнутая переменная domain
console.log(comUrl('yandex'));
//
//IIFE выглядит так: Здесь создаётся и немедленно вызывается Function Expression. Так что код выполняется сразу же и у него есть свои локальные переменные.
(function() {
    let message = "Hello";
    alert(message); // Hello
})();
//
// Пути создания IIFE
(function() {
    alert("Скобки вокруг функции");
})();

(function() {
    alert("Скобки вокруг всего");
}());

! function() {
    alert("Выражение начинается с логического оператора NOT");
}();

+

function() {
    alert("Выражение начинается с унарного плюса");
}();
//
function Counter() {
    let count = 0;
    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}
let counter = new Counter();
alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1
//
// Сумма с помощью замыканий
function sum(a) {
    return function b(b) {
        return a + b
    }
}
//ахах нихуя не понял из learn.js, ��осмотрела владилена и сразу все стало ez
//
//Фильтрация с помощью функции
let arr = [1, 2, 3, 4, 5, 6, 7]

function inBetween(a, b) {
    return function(x) {
        if (x >= a && x <= b) {
            return x
        }
    }
}

function inArray(arr) {
    return function(x) {
        if (arr.includes(x)) {
            return x
        }
    }
}
console.log(arr.filter(inBetween(3, 6))) // 3,4,5,6);
console.log(arr.filter(inArray([1, 2, 10]))) // 1,2);
    //
    //Сортировать по полю
let users = [
    { name: 'John', age: 20, surname: 'Johnson' },
    { name: 'Pete', age: 18, surname: 'Peterson' },
    { name: 'Ann', age: 19, surname: 'Hathaway' },
]

function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1)
}
users.sort(byField('age')) // name
users.forEach((user) => console.log(user.name)) // Pete, Ann, John
    //
    // var
    // Существует 2 основных отличия var от let/const:
    //     Переменные var не имеют блочной области видимости, они ограничены, как минимум, телом функции.
    //     Объявления (инициализация) переменных varпроизводится в начале исполнения функции (или скрипта для глобальных переменных).
    //
    // Глобальный объект
window.currentUser = {
    name: "John"
};
// Объект функции, NFE
function sayHi() {
    alert("Hi");
}
alert(sayHi.name); // sayHi
//
//   Свойство «length»
// Ещё одно встроенное свойство «length» содержит количество параметров функции в её объявлении. Например:
function f1(a) {}

function f2(a, b) {}

function many(a, b, ...more) {}
alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2
//
function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }

}
// для положительных ответов вызываются оба типа обработчиков
// для отрицательных - только второго типа
ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));
//
let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // использует func, чтобы снова вызвать себя же
    }
};
sayHi(); // Hello, Guest
//
function makeCounter() {
    let count = 0

    function counter() {
        return count++
    }
    counter.set = (value) => (count = value)
    counter.decrease = () => count--
        return counter
}
//
function sum(a) {
    let currentSum = a

    function f(b) {
        currentSum += b
        return f
    }

    f.toString = function() {
        return currentSum
    }

    return f
}
console.log(sum(0)(1)(2)(3)(4)(5)) // 15
    //
    //Синтаксис "new Function"
let func = new Function([arg1, arg2, ...argN], functionBody);
//
let sum = new Function('a', 'b', 'return a + b');
alert(sum(1, 2)); // 3
//
//Но когда функция создаётся с использованием new Function, в её [[Environment]] записывается ссылка не на внешнее лексическое окружение, в котором она была создана, а на глобальное. Поэтому такая функция имеет доступ только к глобальным переменным.
function getFunc() {
    let value = "test";
    let func = new Function('alert(value)');
    return func;
}
getFunc()(); // ошибка: value не определено
//
// Планирование: setTimeout и setInterval
// setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
// setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
//Например, данный код вызывает sayHi() спустя одну секунду:
function sayHi() {
    alert('Привет');
}
setTmeout(sayHi, 1000);
//
// С аргументами:
function sayHi(phrase, who) {
    alert(phrase + ', ' + who);
}
setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон
// Отмена через clearTimeout
let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
alert(timerId); // идентификатор таймера
clearTimeout(timerId);
alert(timerId); // тот же идентификатор (не принимает значение null после отмены)
//
//setInterval
// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);
// остановить вывод через 5 секунд
setTimeout(() => {
    clearInterval(timerId);
    alert('stop');
}, 5000);
//
//Рекурсивный setTimeout
//Например, необходимо написать сервис, который отправляет запрос для получения данных на сервер каждые 5 секунд, но если сервер перегружен, то необходимо увеличить интервал запросов до 10, 20, 40 секунд… Вот псевдокод:
let delay = 5000;
let timerId = setTimeout(function request() {
    //...отправить запрос...
    if (false) { //ошибка запроса из - за перегрузки сервера
        // увеличить интервал для следующего запроса
        delay *= 2;
    }
    timerId = setTimeout(request, delay);
}, delay);
//
//Рекурсивный setTimeout позволяет задать задержку между выполнениями более точно, чем setInterval.
let i = 1;
setTimeout(function run() {
    func(i);
    setTimeout(run, 100);
}, 100);
//
// Вывод каждую секунду
function printNumbers(from, to) {
    let x = from

    setTimeout(function go() {
        console.log(x)
        if (x < to) {
            setTimeout(go, 1000)
        } else {
            console.log('stop')
            clearTimeout(printNumbers)
        }
        x++
    }, 1000)
}
printNumbers(5, 7)
    //
    // Декораторы и переадресация вызова, call/apply
    // Прозрачное кеширование
function slow(x) {
    // здесь могут быть ресурсоёмкие вычисления
    alert(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) { // если кеш содержит такой x,
            return cache.get(x); // читаем из него результат
        }

        let result = func(x); // иначе, вызываем функцию

        cache.set(x, result); // и кешируем (запоминаем) результат
        return result;
    };
}
slow = cachingDecorator(slow);
alert(slow(1)); // slow(1) кешируем
alert("Again: " + slow(1)); // возвращаем из кеша
alert(slow(2)); // slow(2) кешируем
alert("Again: " + slow(2)); // возвращаем из кеша
//
//Применение «func.call» для передачи контекста.
func.call(context, arg1, arg2, ...)
    // Он запускает функцию func, используя первый аргумент как её контекст this, а последующие – как её аргументы.
    //
function sayHi() {
    alert(this.name);
}
let user = { name: "John" };
let admin = { name: "Admin" };
// используем 'call' для передачи различных объектов в качестве 'this'
sayHi.call(user); // John
sayHi.call(admin); // Admin
//
function say(phrase) {
    alert(this.name + ': ' + phrase);
}
let user = { name: "John" };
// 'user' становится 'this', и "Hello" становится первым аргументом
say.call(user, "Hello"); // John: Hello
//
// В нашем случае мы можем использовать call в обёртке для передачи контекста в исходную функцию:
let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        alert("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x); // теперь 'this' передаётся правильно
        cache.set(x, result);
        return result;
    };
}
worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей
alert(worker.slow(2)); // работает
alert(worker.slow(2)); // работает, не вызывая первоначальную функцию
//
// bind, apply, call Минин

const person = {
    name: 'rodion',
    age: 18,
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    },
}
const elena = {
        name: 'elena',
        age: 23,
    }
    //person.logInfo.bind(elena, 'frontend', '+79999999')() // возвращает функцию, не вызывается
    //person.logInfo.call(elena, 'frontend', '+79999999') //сразу вызывается
person.logInfo.apply(elena, ['frontend', '+79999999'])
    //
    // перемножаем любой массив, так как в прототип глобального класса добавили свой прототип
const array = [1, 2, 3, 4, 5]
Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.multBy(2))
    //
    //Вот более мощный cachingDecorator:
let worker = {
    slow(min, max) {
        alert(`Called with ${min},${max}`);
        return min + max;
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
        let key = hash(arguments); // (*)
        if (cache.has(key)) {
            return cache.get(key);
        }
        let result = func.call(this, ...arguments); // (**)
        cache.set(key, result);
        return result;
    };
}

function hash() {
    alert([].join.call(arguments)); // 1,2 //Этот трюк называется заимствование метода.
}
worker.slow = cachingDecorator(worker.slow, hash);
alert(worker.slow(3, 5)); // работает
alert("Again " + worker.slow(3, 5)); // аналогично (из кеша)
//
//Декоратор-шпион
function work(a, b) {
    console.log(a + b) // произвольная функция или метод
}

// function spy(func, hash) {
//     let cache = new Map()
//     return function() {
//         let key = hash(arguments)
//         if (cache.has(key)) {
//             return cache.get(key)
//         }

//         let result = func.call(this, ...arguments)
//         cache.set(key, result)
//         return result
//     }
// }

// function hash() {
//     console.log([].join.call(...arguments))
// }
// work = spy(work, hash)

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args)
        return func.apply(this, arguments)
    }

    wrapper.calls = []

    return wrapper
}

work = spy(work)
work(1, 2) // 3
work(4, 5)
for (let args of work.calls) {
    console.log('call:' + args.join()) // "call:1,2", "call:4,5"
}
//
function f(x) {
    console.log(x)
}

function delay(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    }
}

// создаём обёртки
let f1000 = delay(f, 1000)
let f2500 = delay(f, 2500)

f1000('test') // показывает "test" после 1000 мс
f2500('test') // показывает "test" после 2500 мс
    //
    // Привязка контекста к функции
    //Потеря «this»
let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};
setTimeout(user.sayHi, 1000); // Привет, undefined!
// 
// Решение 2: привязать контекст с помощью bind
let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};
let sayHi = user.sayHi.bind(user); // (*)
sayHi(); // Привет, Вася!
setTimeout(sayHi, 1000); // Привет, Вася!
// 
// bindAll
for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
}
//