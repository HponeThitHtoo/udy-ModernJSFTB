// var, let, const

/* 
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// letters, numbers, _, $
// Cannot start with number

// Multi word variables
var firstName = 'John'; // Camel Case
var first_name = 'Sara'; // Underscored
var FirstName = 'Tom'; // Pascal Case
var firstname; 
*/


// Let
/*
let name;
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);
*/


// const

/* const name = 'John';
console.log(name);
// Cannot reassign
// name = 'Sara';
// Have to assign a value
// const greeting;
 */

const person = {
    name: 'John',
    age: 30,
};

person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// numbers = [1, 2, 3, 4, 5, 6]; // will be error
numbers.push(6); // this is ok

console.log(numbers);