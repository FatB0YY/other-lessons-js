'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const now = new Date()

    console.log(now) // полная дата
    console.log(now.getFullYear()) // 2020
    console.log(now.getMonth()) // месяц
    console.log(now.getDate()) // день
    console.log(now.getDay()) // воскресенье = 0
    console.log(now.getHours()) // 18 часов
    console.log(now.getUTCHours()) // 15 часов

    console.log(now.getTimezoneOffset()) // разница в минутах между UTC и обычным // -180

    console.log(now.getTime()) //1618155851223

    // ----------------------
    // теперь set вместо get
    console.log(now.setHours(13, 40)) // 18 часов
        // 13 часы, 40 минут

    // new Date.parse('2020-05-01')

    //  ----------
    // подсчет времени выполнения скрипта
    let start = new Date()

    for (let i = 0; i < 100; i++) {
        let some = i
        console.log(some)
    }

    let end = new Date()
    console.log(`За ${end - start} миллисекунд`)
})