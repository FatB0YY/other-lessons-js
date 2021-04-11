'use strict'

console.log(document.head) // head
console.log(document.documentElement) // html
console.log(document.body.childNodes) // дети у body
    // firstChild
    // lastChild
console.log(document.querySelector('#current').parentNode) // родитель элемента
console.log(document.querySelector('#current').parentNode.parentNode) // родитель родителя
console.log(document.querySelector('#current').parentElement) // элемент
    // везде можно брать элемент через Element
    // -----------

console.log(document.querySelector('[data-current="3"]')) // получаем элемент с атрибутом
console.log(document.querySelector('[data-current="3"]').nextSibling) // получаем след ноду
console.log(document.querySelector('[data-current="3"]').nextElementSibling) // след элемент

// ---------------
console.log('forof---------------')
for (let node of document.body.childNodes) {
    if (node.nodeName === '#text') {
        continue
    }
    console.log(node)
}
console.log('forof---------------end')