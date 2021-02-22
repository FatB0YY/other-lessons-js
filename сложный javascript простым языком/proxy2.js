'use strict';
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
//proxy2

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

        if (!(prop in target)) {
            // Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
            return (
                prop
                .split('_')
                .map((p) => target[p])
                //Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.s
                .join(' ')
            );
            // op.name_age_job
            //"Rodion 18 FullStack"
        }
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