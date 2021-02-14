'use strict';

//promise

console.log('Request data...');

/*
setTimeout(() => {
    console.log('Request data...');
    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working',
    };

    setTimeout(() => {
        backendData.modified = true;
        console.log('Data received', backendData);
    }, 2000);
}, 2000);
*/

// получаем функцию колбэк в конструкторе класса промис
/*
функция resolve вызывается тогда, когда
законченая асинхронная операция и при чем она закончена успешно
*/
/*
функция reject 
*/
/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...');

        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working',
        };
        // говорим нашему промису, что он завершил свое выполнение
        resolve(backendData);
        // для того, чтобы у насбыл доступ к backendData, передадим ее в метод resolve
    }, 2000);
});
// данный колбэк будет вызван тогда, когда закончиться resolve().
// backendData будет полученый просто как объект data
p.then((data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data.modified = true;
                resolve(data);
            }, 2000);
        });
    })
    .then((clientData) => {
        clientData.fromPromise = true;
        return clientData;
    })
    .then((data) => {
        console.log('Modified', data);
    })
    .catch((err) => {
        console.log('Error:', err);
    })
    .finally(() => {
        console.log('Finally !');
    });

//////////
*/

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });
};
//sleep(2000).then(() => console.log('After 2 sec'));
//sleep(3000).then(() => console.log('After 3 sec'));

//метод all ждет пока выполняться все остальные промисы
Promise.all([sleep(5000), sleep(2000)]).then(() => {
    console.log('All promises');
});

// race выполняет тот промис, которыйй первый  (быстрее всего)
Promise.race([sleep(5000), sleep(2000)]).then(() => {
    console.log('Race promises');
});