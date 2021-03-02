'use strict'
// fetch, xhr

const requestURL = 'https://jsonplaceholder.typicode.com/users'

// с промисами

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
            // GET для получения данных
            // POST для создания
            // DELETE для удаления
            // PUT полного обновления элемента
            // PATCH для частичного обновления элемента
        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(zhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

// sendRequest('GET', requestURL)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

const body = {
    name: 'Rodion',
    age: 18,
}

sendRequest('POST', requestURL, body)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))