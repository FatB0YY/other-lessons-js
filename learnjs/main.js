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
    //