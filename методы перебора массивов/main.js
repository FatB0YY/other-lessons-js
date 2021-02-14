'use strict';

document.addEventListener('DOMContentLoaded', function() {
    let mix = ['rr', true, 18, '18', 'R0DiOn', false];

    for (let index in mix) {
        //весь массив
        console.log(mix[index]);
    }

    for (let index of mix) {
        //служит для перебора значений, не надо делать mix[index]
        console.log(index);
    }

    mix.forEach((item, index, arr) => {
        console.log('-----Start----');
        console.table(item, index);
        console.log('----End----');
    });

    for (let i = 0; i < mix.length; i++) {
        // mix[i][0] возьмем это же значение, его 1 букву
        //slice(1) индекс эл в массиве с которого будет начинаться новый массив
        if (typeof mix[i] === 'string') {
            mix[i] = mix[i][0].toUpperCase() + mix[i].slice(1).toLowerCase();
        }
    }
    console.log(mix);

    //item это уже элемент в массиве mix
    mix.forEach((item, i, mix) => {
        if (typeof item === 'string') {
            mix[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
        }
    });
    console.log(mix);

    //map возвращает новой массив
    // изначальный массив не меняется !
    const correctName = mix.map((item, i) => {
        if (typeof item === 'string') {
            return item[0].toUpperCase() + item.slice(1).toLowerCase();
        }
    });
    console.log(correctName);
    console.log(mix);

    let forWords = [];
    for (let i = 0; i < mix.length; i++) {
        // isNan(mix[i]) исключает "18" (строка, которую можно привести к числу)
        if (typeof mix[i] === 'string' && isNaN(mix[i])) {
            forWords.push(mix[i]); //пушим элемент в новый массив
        }
    }
    console.log(forWords);

    let filterWords = mix.filter((item, i) => {
        // фильтруем элементы bool значения
        return typeof item[i] === 'string' && isNaN(item[i]);
    });
    console.log(forWords);

    // есть ли в массиве mix числа ?

    let result = false;
    for (let i = 0; i < mix.length; i++) {
        if (typeof mix[i] === 'number') {
            result = true;
            break;
        }
    }
    // тоже самое только через some
    let result2 = mix.some((item, i) => {
        console.log('Эл: ' + item);
        return typeof item === 'number';
    });
    console.log('Итог: ' + result2);

    let result3 = mix.every((item, i) => {
        //метод проверяет ВСЕ элементы и только потом true or false
        return typeof item === 'number';
    });
    console.log(result3);

    //reduce
    let sum = 0;
    let numbers = [1, 2, 3, 4];
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);

    let sum2 = numbers.reduce((accamulator, item, i) => {
        // accamulator это и есть наш резьлтат в конце
        console.log('Сумма:' + accamulator);
        return accamulator + item;
    });

    let arr = [
        [1, 2],
        [3, 4],
        [5, 6],
    ];
    const res = arr.reduce((acc, item) => acc.concat(item), []);
    console.log(res);
});