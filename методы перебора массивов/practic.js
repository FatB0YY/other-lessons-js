'use strict';

document.addEventListener('DOMContentLoaded', function() {
    fetch('./dbHeroes.json')
        //.then обрабатываем наш json
        .then((response) => response.json())
        //из json в object
        .then((data) => practice(data))
        .catch((err) => console.log('error' + err));

    function practice(response) {
        //берем все имена и пушаем в массив
        const allHeroesName = [];
        response.forEach((item) => {
            allHeroesName.push(item.name);
        });

        // то же самое const allHeroesName = response.map((item) => item.name);

        //создаем массив из обьектам со значениями, которые нам нужны
        const allHeroes = response.map(({ name, genger, photo }) => ({
            name,
            genger,
            photo,
        }));

        //получаем в массиве  объекты тех персонажей, у кого status != alive
        const aliveHeroes = response.filter((item) => item.status !== 'alive');
        console.log(aliveHeroes);

        //есть ли в массиве персонаж, с нацио chines
        const chinoHero = response.some((item) => item.citizenship === 'Chines');
        console.log(chinoHero);

        //узнаем персонажа, кто есть chines
        //метод find вернет только первое совпадение
        const whoChines = response.find((item) => item.citizenship === 'Chines');
        console.log(whoChines);

        const heroes = response.reduce((accum, item) => {
            return accum.concat(item.name);
        }, []);
    }
});