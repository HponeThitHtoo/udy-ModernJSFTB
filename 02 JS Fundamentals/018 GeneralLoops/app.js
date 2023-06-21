// For Loop
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('2 is my favorite number');
        continue;
    }

    if (i === 5) {
        console.log('Stop the loop');
        break;
    }

    console.log('Number ' + i);
}

// While Loop
let x = 0;

while(x < 10) {
    console.log('Number ' + x);
    x++;
}

// Do While Loop
let y = 0;

do {
    console.log('Number ' + y);
    y++;
}while(y < 10);

// Loop Through Array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// For Each
cars.forEach(function(car, index, array) {
    console.log(`${index}: ${car}`);
    console.log(array);
});

// Map
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'},
];

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);

// For In
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
};

for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}