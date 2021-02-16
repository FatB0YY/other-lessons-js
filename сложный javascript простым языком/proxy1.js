'use strict';
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
//proxy1

// Objects
const person = {
    name: 'Rodion',
    age: 18,
    job: 'FullStack',
};

const op = new Proxy(person, {
    //Вторым параметром мы передаем набор хэндлеров,
    //которые позволяют сделать ловушки для данном
    //случае для объекта

    get(target, prop) {
        // в качестве значения target мы получаем сам объект, над которым мы ставим proxy
        console.log('Target', target);
        // в качестве значения prop мы получаем в строков формате название поля к которму мы обращаемся
        console.log('Prop', prop);
        // обращаемся к объекту target и его ключу prop
        return target[prop];
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            throw new error(`No ${prop} field in target`);
        }
    },
    // has return true or false
    // есть ли такое поле в объекте ?
    has(target, prop) {
        //метод includes() позволяет определить, содержит ли массив искомый элемент
        return ['age', 'name', 'job'].includes(prop);
        //'name' in op = true
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop);
        delete target[prop];
        // delete op.age
        return true;
    },
});

///////////

// Functions

const log = (text) => {
    return `Log: ${text}`;
};

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Callinf fn...');
        // target это сама функция
        console.log('Target: ', target);
        // thisArg это контекст если мы его передаем с помощью метода call или bind
        console.log('thisArg: ', thisArg);
        // args это все параметры которые мы передаем в нашу функцию
        console.log('args: ', args);

        //здесь можно как угодно преобразовывать нашу функцию
        return target.apply(thisArg, args).toUpperCase();
    },
});

///////////

// Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person, {
    // для того чтобы отслдить инициализацию какого то нового класса,
    // т.е через ключевое слово new, мы используем трэр (ловушку)
    construct(target, args) {
        console.log('Construct...');

        // с помощью оператора спрэт мы передаем все необходимые параметры,
        //которые нужны для работы с данным классом (name, age)

        //return new target(...args);
        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop "${prop}"`);
                return t[prop];
            },
        });
    },
});

const p = new PersonProxy('Maxim', 20);