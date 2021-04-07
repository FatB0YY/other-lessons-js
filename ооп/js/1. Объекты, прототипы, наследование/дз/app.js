'use strict'

let cpu = {
    producer: 'AMD',
    amount: 250.0,
    family: 'AMD Ryzen 7',
    name: 'Ryzen 7 3700X',
}

let memory = {
    __proto__: cpu,
    producer: 'Hynix',
    amount: 60,
    memory: 2048,
    name: 'Hynix DDR4-2666',
    family: 'DDR4',
}
cpu.image = ''

console.log(memory)