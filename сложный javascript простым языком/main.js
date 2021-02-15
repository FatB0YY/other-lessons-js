'use strict';

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
};
/*
delay(2000).then(() => {
    console.log('2s');
});
*/

const url = 'https://jsonplaceholder.typicode.com/todos/1';

function fetchtodos() {
    console.log('Fetch get started...');

    return delay(2000)
        .then(() => fetch(url))
        .then((response) => response.json());
}

fetchtodos()
    .then((data) => {
        console.log('Data:', data);
    })
    .catch((err) => {
        console.log('Error', err);
    });