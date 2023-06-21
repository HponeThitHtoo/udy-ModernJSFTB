/****** 6 Primitive Types ******/

// String
const name = 'John Doe';
console.log(typeof name);

// Number
const age = 45;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car); // output >> object (JS Bug)

// undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);



/****** Primitive Types - Objects ******/

// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies); // object

// Object literal
const address = {
    city: 'Boston',
    state: 'MA',
};
console.log(typeof address); // object

// Date
const today = new Date();
console.log(typeof today); // object