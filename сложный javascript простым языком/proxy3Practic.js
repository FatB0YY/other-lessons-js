'use strict';
//proxy3Practic

// Wrapper

const widthDeafaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get(obj, target) {
            if (prop in obj) {
                return obj[prop];
            } else {
                return defaultValue;
            }
        },
    });
};

const position = widthDeafaultValue({
        x: 24,
        y: 42,
    },
    0
);

// hidden properies

const widthHiddenProps = (target, prefix = '_') => {
    // мы хотим, чтобы те св-ва которые начинаются с _,
    // они были в объекте, но мы никак не могли бы получить к ним доступ.
    return new Proxy(target, {
        has: (obj, prop) => {
            if (prop in obj && !prop.startsWith(prefix)) {
                return true;
            }
        },
        ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
    });
};

const data = widthHiddenProps({
    name: 'Rodion',
    age: 18,
    _uid: '12345678',
});

//////////////////

// Optimization

// userData.find(user => user.id === 1)
/*
const userData = [
    { id: 11, name: 'Rodion', job: 'Fullstack', age: 18 },
    { id: 22, name: 'Nilita', job: 'Student', age: 14 },
    { id: 33, name: 'Andrey', job: 'Teacher', age: 54 },
    { id: 44, name: 'Yana', job: 'Doctor', age: 17 },
];
*/

/*
const index = {};
// id = index
userData.forEach((i) => (index[i.id] = i));
*/

//const q = new Array([...])
const IndexArray = new Proxy(Array, {
    //[args] является тем самым userData
    construct(target, [args]) {
        const index = {};
        args.forEach((item) => (index[item.id] = item));

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return (item) => {
                            index[item.id] = item;
                            arr[prop].call(arr, item);
                        };
                    case 'findById':
                        return (id) => index[id];
                    default:
                        return arr[prop];
                }
            },
        });
    },
});

const users = new IndexArray([
    { id: 11, name: 'Rodion', job: 'Fullstack', age: 18 },
    { id: 22, name: 'Nilita', job: 'Student', age: 14 },
    { id: 33, name: 'Andrey', job: 'Teacher', age: 54 },
    { id: 44, name: 'Yana', job: 'Doctor', age: 17 },
]);

//users.findById(11)