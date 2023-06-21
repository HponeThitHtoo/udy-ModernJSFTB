/* const sayHello = function() {
    console.log('Hello');
} */

// One line function does not need braces
/* const sayHello = () => console.log('Hello');
sayHello(); */

/* const sayHello = function() {
    return 'Hello';
} */

// One line returns
/* const sayHello = () => 'Hello';
console.log(sayHello()); */

// Return object
/* const sayHello = () => ({ msg: 'Hello' });
console.log(sayHello()); */

// Single param does not need parenthesis
/* const sayHello = name => console.log(`Hello ${name}`);
sayHello('Brad'); */

// multiple params need parenthesis
/* const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
sayHello('Brad', 'Traversy'); */

const users = ['Nathan', 'John', 'William'];

/* const nameLengths = users.map(function(name) {
    return name.length;
}); */

// Shorter
/* const nameLengths = users.map((name) => {
    return name.length;
}) */

// Shortest
// const nameLengths = users.map(name => name.length);

// console.log(nameLengths);

