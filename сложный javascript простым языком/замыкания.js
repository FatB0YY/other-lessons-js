'use strict';
// замыкания

function createCalcFunction(n) {
    return function() {
        console.log(1000 * n);
    };
}
const calc = createCalcFunction(42);
calc();

///////////
function createIncrementor(n) {
    return function(num) {
        return num + n;
    };
}
const addOne = createIncrementor(1);
console.log(addOne(10));

//////

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`;
    };
}
const ruUrl = urlGenerator('ru');
console.log(ruUrl('fl-rodion'));

////============================
// необходимо написать свою собственную фугкцию bind

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args);
    };
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {
    name: 'Mike',
    age: 24,
    job: 'Doctor',
};

bind(person1, logPerson)();