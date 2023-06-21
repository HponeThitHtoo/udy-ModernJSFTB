let val;
val = 5;
console.log(val);
console.log(typeof val);
console.log(val.length); // undefined

// Number to string
val = String(555);
console.log(val);
console.log(typeof val);
console.log(val.length); // 3

// Bool to string
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

// Date to string
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

// Array to string
val = String([1, 2, 3, 4]);
console.log(val);
console.log(typeof val);
console.log(val.length);

// toString()
val = (5).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (true).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);


// String to number
val = Number('5');

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

// Boolean to Number
val = Number(true);

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

// Null to Number
val = Number(null);

// Output
console.log(val); // 0
console.log(typeof val);
console.log(val.toFixed(2)); // 0.00

// String to Number
val = Number('hello');

// Output
console.log(val); // NaN
console.log(typeof val); // number
console.log(val.toFixed(2)); // NaN

val = parseInt('100.30');

// Output
console.log(val); // 100
console.log(typeof val); // number
console.log(val.toFixed(2)); // 100.00

val = parseFloat('100.30');

// Output
console.log(val); // 100.3
console.log(typeof val); // number
console.log(val.toFixed(2)); // 100.30

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum); // 56
console.log(typeof sum); // string