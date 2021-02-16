'use strict';
//await/asyncF

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

/*
function fetchtodos() {
    console.log('Fetch get started...');

    return (
        delay(2000)
        .then(() => fetch(url))
        //response.json() – декодирует ответ в формате JSON,
        .then((response) => response.json())
    );
}

fetchtodos()
    .then((data) => {
        console.log('Data:', data);
    })
    .catch((err) => {
        console.log('Error', err);
    });

    */

async function fecthAsyncTodos() {
    console.log('Fetch get started...');
    try {
        await delay(2000);
        // мы не перейдем к этой строчки, пока не выполниться await
        // оператор await позволяет нам автоматически обработать этот промис
        const responce = await fetch(url);
        const data = await responce.json();
        console.log('Data:', data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('finally !');
    }
}
fecthAsyncTodos();