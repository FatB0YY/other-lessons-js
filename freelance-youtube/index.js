"use strict";

const bigInteger = 9223372036854775807; //n

let userAge = 18;
let userAgeInfo = `Возраст ${userAge}`;
console.log(userAgeInfo);

let userInfo = {
    name: "Rodion",
    age: 18,
    "likes js": true,
};

userInfo.thty = "thhyjh"; //новое значение
//delete userInfo.thty удаление

console.log(
    `Имя ${userInfo.name}, а возраст ${userInfo.age}, js ? ${userInfo["likes js"]}`
);

userAge = String(userAge); //из нумбер в string // Number

// 5**3 степень

// null > 0  false
// null == 0 false
// null >= 0 true

//Имя функции и её предназначение
/*
Как правило, в имени используются опеределенные префиксы,
обозначающие действие, после которых следует объект действия.

Например, функции, начинающиеся с
"show..." обычно что-то показывают,
"get..." – возвращают значение,
"calc..." – что-то вычисляют,
"create..." – что-то создают,
"check..." – что-то проверяют и возвращают логическое
значение, и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.
*/

// Функция вывода сообщения
/*
function showMessage() {
	console.log('Сообщение');
}
*/

/*
Функция должна делать только то,
что явно подразумевается её названием.
И это должно быть одним действием.
Два независимых действия обычно подразумевают две функции,
даже если предполагается, что они будут вызываться вместе (в этом случае мы
можем создать третью функцию, которая будет их вызывать).
*/

/* уничтожение
function calc(numOne) {
    console.log(numOne);
    return calc(numOne + 1);
}

calc(1);
*/

// Многострочная стрелочная функция
let getMessage = (text, name) => {
    let message = text + ", " + name + "!";
    return message;
};
console.log(getMessage("Привет", "Вася"));

setInterval(); // позволяет вызываатьфункцию повторно через интервал времени
setTimeout(); //позволет вызвать функцию 1 раз чнерез определенное время
// каждая секунда = 1000*i //for i++

//точная задержка
let showMessage = (text, name) => {
    console.log(`${text}, ${name} !`);
    setTimeout(showMessage, 1000, "Привет", "Вася");
};

// clearTimeout(), setTimeout должен быть в переменной