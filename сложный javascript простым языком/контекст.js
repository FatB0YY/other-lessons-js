'use strict';

//контекст

function hello() {
    // ключевое слово this указывает на текущий контекст
    console.log('hello', this);
    // вторым параметром мы получаем объект window - глобальный объект
    // window.alert(1)
}

const person = {
    name: 'Rodion',
    age: 18,
    sayHello: hello,
    // мы хотим создать ещеодну функцию в объекте person, но которая также будет
    // сылаться на функцию hello, но this там был глобального объекта window
    sayHelloWindow: hello.bind(this),
    /*
                                                                                в js любые объекты явл объектами,в том числе и функции
                                                                                у которых есть свои опред методы
                                                                                  */
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Job: ${job}`);
        console.log(`Phone: ${phone}`);
        console.groupEnd();
    },
};

// window.hello()
// грубо говоря, this указывает на тот объект в контексте которого оно было вызвано (слева от точки)

const lena = {
    name: 'Elena',
    age: 24,
};

//bind первым параметром мы указываем контекст, который должен быть привязан к новой функции
const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8(999)123-45-67');
fnLenaInfoLog();
//Name: Elena
//Age: 24
// или метод apply
person.logInfo.apply(lena, ['Frontend', '8(999)123-45-67']);

// Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение

///================================== практика прототипов и контекста

const array = [1, 2, 3, 4, 5];

function multBy(arr, n) {
    return arr.map((i) => {
        return i * n;
    });
}
console.log(multBy(array, 5));

Array.prototype.multBy = function(n) {
    return this.map((i) => {
        return i * n;
    });
};
console.log(array.multBy(2));