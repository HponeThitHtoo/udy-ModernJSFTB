const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
console.log(val);

val = num1 * num2;
console.log(val);
val = num1 - num2;
console.log(val);

val = num1 / num2;
console.log(val);

val = num1 % num2;
console.log(val);


// Math Object
val = Math.PI;
console.log(val);

val = Math.E;
console.log(val);

val = Math.round(2.4);
console.log(val); // 2

val = Math.ceil(2.4);
console.log(val); // 3;

val = Math.floor(2.8);
console.log(val); // 2

val = Math.sqrt(64);
console.log(val); // 8

val = Math.abs(-3);
console.log(val); // 3

val = Math.pow(8, 2);
console.log(val); // 64

val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
console.log(val); // -2

val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
console.log(val); // 55

val = Math.random();
console.log(val);

val = Math.floor(Math.random() * 20 + 1);
console.log(val); // random number from 1 to 20