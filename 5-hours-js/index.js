/*

document.addEventListener("click", (event) => {
    event.preventDefault();
});

let age = 26;
console.log(age);
age = true;
console.log(age);
age = "rodion";
console.log(age);

const person = {
    firstName: "Rodion",
    age: 18,
    year: 2002,
    languages: ["Ru", "En"],
    hasWide: false,
    greet: function() {
        console.log("greet from person");
    },
};

const key = "year";
console.log(person[key]);
console.log(person.languages);

console.log(parseFloat((0.4 + 0.2).toFixed(1))); // вместо 0.60000001, получаем 0.6

console.log(Math.sqrt(25));

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("Рандом число = " + getRandomBetween(10, 57));

//////////
let lastName = "Ramazanov";

function lastNameF() {
    return lastName;
}

age = 18;

let name = "Rodion";

let outout = `имя ${name} мой возраст ${
  age < 10 ? "A" : "B"
} лет. А фамилия ${lastNameF()}`;

console.log(outout);

//////////// строки

console.log(name.length); //сколько символов
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2)); //d
console.log(name.indexOf("io")); //3 else -1
console.log(name.startsWith("r")); //false
console.log(name.repeat(3)); //RodionRodionRodion

const string = "        password";
console.log(string.trim()); //очистка пробелов

function logPerson(s, name, age) {
    if (age < 0) {
        age = "Еще не родился";
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

let personAge = -2;
let personName = "RodionR";

let output = logPerson `Имя ${personName}, Возраст: ${personAge} !`;

console.log(output);

////////////// Функции

let counter = 0;
const interval = setInterval(function() {
    if (counter === 3) {
        clearInterval(interval);
    } else {
        console.log(++counter);
    }
}, 1000);

// стрелочные функции

function greet(name) {
    console.log("Привет ", name);
}

const arrow = (name) => {
    console.log("Привет ", name);
};

const arrow2 = (name) => console.log("Привет ", name);

function sumAll(...all) {
    let result1 = 0;
    for (let num of all) {
        result1 += num;
    }
    return result1;
}

const res = sumAll(1, 2, 3, 4, 5);
console.log(res);

//замыкания

function createMember(name) {
    //приватные перемннные
    return function(lastName) {
        console.log(name + lastName);
    };
}

const logWithLastName = createMember("Rodion");
console.log(logWithLastName("Ramazanov"));

// массивы

const cars = ["Мазда", "Форд", 1, 2, "21", true];

console.log(cars);

cars.push("Porshe"); //добавление нового эл в конец
console.log(cars);

cars.unshift("Волга"); //в начало
console.log(cars);

const carsItem = cars.shift(); // удаляет первый эл и возвращает первый эл
console.log(cars);
console.log(carsItem);

cars.pop(); // удаляет последний эл и возвращает первый эл

cars.reverse(); //поменять все местами
cars.reverse();

// Задача 1
const text = "Привет, я изучаю js";
let reverseText = text.split("");
console.log(reverseText);

let reverseText1 = text.split("").reverse();
console.log(reverseText1);

let reverseText2 = text.split("").reverse().join("");
console.log(reverseText2);

//

const index = cars.indexOf("Форд");
cars[index] = "Форд 2.0";
console.log(cars);

const people = [
    { name: "Rodion", busjet: 5000 },
    { name: "Yana", busjet: 4500 },
    { name: "Nikita", busjet: 4000 },
];

const index1 = people.findIndex(function(person) {
    return person.busjet === 4500;
});

console.log(people[index1]);
////
let findedPerson = -1;
for (const person of people) {
    if (person.busjet === 4500) {
        findedPerson = person;
    }
}
console.log(findedPerson);
////
const person1 = people.find((person) => person.busjet === 4500);
console.log(person1);

/////////////

const allBusjet1 = people.reduce(function(acc, person) {
    if (person.busjet > 4000) {
        acc += person.busjet;
    }
    return acc;
}, 0); // начальное значение 0

console.log(allBusjet1);

/////

const allBusjet2 = people
    .filter((person) => person.busjet > 4000)
    .reduce((acc, person) => {
        acc += person.busjet;
        return acc;
    }, 0); // начальное значение 0

console.log(allBusjet2);

////

/*
const displayItems = allItems.filter(
    (item) => item.name.indexOf("phone") !== -1
);
*/

// объекты

const person3 = {
    name: "Rodion",
    age: 18,
    isProgrammer: true,
    greet() {
        //функция
        console.log("greet from person");
    },
    "complex key": "Complex value",
    ["key_" + (1 + 3)]: "computed key",
};

console.log(person3.age);
console.log(person3["complex key"]);

person3.greet();

delete person3["key_4"];
console.log(person3);

let { name, age: personAge3, isProgrammer } = person3;
console.log(name, personAge3, isProgrammer);

/////

for (let key in person3) {
    //опасен, так как забегает в прототип обьекта тоже
    if (person3.hasOwnProperty(key)) {
        //защита от этого
        console.log("key: ", key);
        console.log("value", person3[key]);
    }
}

////
console.log("-------------------");

const keys = Object.keys(person3);
keys.forEach((key) => {
    console.log("key: ", key);
    console.log("value", person3[key]);
});

console.log("-------------------");

//////

const logger = {
    keys() {
        console.log("object keys: ", Object.keys(this));
    },

    keysAndValue() {
        Object.keys(this).forEach((key) => {
            console.log(`"${key}" : ${this[key]}`);
        });
    },
    withPsrams(top = false, between = false, bottom = false) {
        if (top) {
            console.log("---- Start ----");
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}" : ${this[key]}`);
            if (between && index !== array.length - 1) {
                console.log("---------");
            }
        });
        if (bottom) {
            console.log("---- End ----");
        }
    },
};

const bound = logger.keys.bind(logger); //функция
bound();

const bound2 = logger.keys.bind(person3); //функция
bound2();

// дз
console.log("-------------");

logger.keysAndValue.call(logger); //вызов
console.log("-------------");
logger.keysAndValue.call(person3); //вызов

console.log("-------------------");
console.log("-------------------");

logger.withPsrams.call(person3, true, true, true);

///// Асинхронность

//Event Loop

const timeout = setTimeout(() => {
    clearTimeout(timeout); //1 раз вызов
    console.log("After timeout 2,5s");
}, 2500);

clearTimeout(timeout); // больше не выведется

//// задача
/*
const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait);
};

delay(() => {
    console.log("After 2 seconds");
}, 2000);
*/

// промисы

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(); //reject() ошибка
        }, wait);
    });
    return promise;
};

/*
delay(2500)
    .then(() => {
        console.log("After 2 seconds");
    })
    .catch((err) => console.error("Error:", err))
    .finally(() => {
        console.log("Finally");
    });

    */
////////

const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

getData().then((data) => console.log(data));

//////// разный синтаксис

async function asyncExample() {
    try {
        await delay(3000); //ждем когда выполнится
        const data = await getData();
        console.log("Data: ", data);
    } catch (e) {
        console.error("Error:", e);
    } finally {
        console.log("Finally");
    }
}
asyncExample();

////// DOM = Document Object Modul
//работа с api браузера

document.body.style.background = "red"; // сделать фон красным

setTimeout(() => (document.body.style.background = ""), 1500); // вернуть назад

/////

/*
let name7 = window.prompt("Имя твое быро сказал");
console.log(name7);
*/

const heading = document.getElementById("h1");
console.log(heading);
//console.dir(heading); //показать св-ва
console.dir(heading.textContent);
heading.textContent = "Changed from js";
console.dir(heading.textContent);

//////

heading.style.color = "green";

function addStylesTo(node) {
    node.style.color = "2rem";
    node.style.color = "red";
    node.style.background = "black";
    node.style.textAlign = "center";
    node.style.padding = "center";
}

setTimeout(() => {
    addStylesTo(heading);
}, 1500);

////

const heading2 = document.querySelector("span");
console.log(heading2);

function addStylesTo2(node) {
    node.style.color = "red";
}

setTimeout(() => {
    addStylesTo2(heading2);
}, 1500);

/////

const spanList = document.querySelectorAll("span");

for (let i = 0; i < spanList.length; i++) {
    setTimeout(() => {
        spanList[i].style.fontSize = "24px";
        console.log(i);
    }, 1000 * i);
}

////

const click1 = document.querySelector("#click1");
let click1Index = false;

click1.onclick = () => {
    if (click1Index === false) {
        click1.style.fontSize = "24px";
        click1.style.color = "green";
        click1Index = true;
    } else {
        click1.style.fontSize = "";
        click1.style.color = "";
        click1Index = false;
    }
};

//////

click1.addEventListener("dblclick", () => {
    if (click1Index === false) {
        click1.style.fontSize = "28px";
        click1.style.color = "red";
        click1Index = true;
    } else {
        click1.style.fontSize = "";
        click1.style.color = "";
        click1Index = false;
    }
});

//////

function addStylesTo3(node, text, color) {
    node.textContent = text;
    node.style.color = color;
}

const h2A = document.querySelector("#h2-a");
setTimeout(() => {
    addStylesTo3(h2A.children[0], "Кнопка меняется !", "yellow");
}, 5000); // children[0] для того, чтобы не было перетирания a на текст

h2A.addEventListener("click", (event) => {
    event.preventDefault(); //отмена поведения ссылки

    console.log("Click on link", event.target.getAttribute("href"));
    //target.getAttribute("href")); получить значение href
    // target.setAttribute("href") задать атрибут href
});

//////