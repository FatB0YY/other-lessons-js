'use strict'
//Class

/*
const animal = {
    name: 'animal',
    age: 5,
    hasTail: true,
};


class Animal {
    // статик <type> будет доступно только у Animal
    static type = 'ANIMAL';

    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    // реализуем метод voice, который потом войдет в прототип
    voice() {
        console.log('I am Animal !');
    }
}
const animal = new Animal({
    name: 'animal',
    age: 5,
    hasTail: true,
});

//extends наследует от Animal
class Cat extends Animal {
    static type = 'cat';

    constructor(options) {
        //будет ошибка, так как когда мы реализовываем метод конструктор в дочернем классе,
        //который наследуется от другого класса, мы сначала должны вызвать родительский конструктор
        //this.color = options.color;
        //super мы вызываем конструктор родителя
        super(options);
        this.color = options.color;
    }

    //метод в дочернем классе перетирает родительский метод voice
    voice() {
        //super вызываем voice род класса, а потои дочернего
        super.voice();
        console.log('I am Cat');
    }

    get ageInfo() {
        return this.age * 7;
    }

    set ageInfo(newAge) {
        this.age = newAge;
    }
}
const cat = new Cat({
    name: 'cat',
    age: 3,
    hasTail: true,
    color: 'black',
});
// cat.voice() будет доступен
*/

/////===================

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}
class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.backgroundColor = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red',
})

const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'blue',
})

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}
const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green',
})