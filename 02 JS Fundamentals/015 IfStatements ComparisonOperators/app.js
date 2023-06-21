const id = 100;

// Equal To
if (id == 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// Not Equal To
if (id != 101) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// Equal To Value & Type
if (id === 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// Not Equal To Value & Type
if (id !== 101) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

if (id) {
    console.log(`The ID is ${id}`);
} else {
    console.log('NO ID');
}

if (typeof id2 !== 'undefined') { // id2 is not even declare, so you need to check like this to avoit uncatch error
    console.log(`The ID is ${id}`);
} else {
    console.log('NO ID');
}

// Greater Or Less than
if (id <= 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// IF ELSE IF
const color = 'yellow';

if (color === 'red') {
    console.log('Color is red');
} else if (color === 'blue') {
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue');
}

// Logical Operators
const name = 'Steve';
const age = 4;

// AND &&
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// Ternary Operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// Without Braces
if (id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');