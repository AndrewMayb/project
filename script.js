'use strict'

let str = 'some';
let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

console.dir([0, 45, 88])

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello!!!');
    }
}

const jonh = Object.create(soldier);

Object.setPrototypeOf(jonh, soldier);

jonh.sayHello();