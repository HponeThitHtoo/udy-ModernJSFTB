// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a: 1, b: 1}, new Date()];

let val;

// Get array length
val = numbers.length;
console.log(val);

// Check if is array
val = Array.isArray(numbers);
console.log(val);

// Get single value
val = numbers[3];
console.log(val);

// Insert into array
numbers[2] = 100;
console.log(val);

// Find index of value
val = numbers.indexOf(36);
console.log(val);

// Mutating Arrays
// Add on to end
numbers.push(250);
console.log(numbers);

// Add on to front
numbers.unshift(120);
console.log(numbers);

// Take off from end
numbers.pop();
console.log(numbers);

// Take off from front
numbers.shift();
console.log(numbers);

// Splice values
numbers.splice(1, 1); // startIndex, count
console.log(numbers);

// Reverse
numbers.reverse();
console.log(numbers);

// Concatenate array
val = numbers.concat(numbers2);
console.log(val);

// Sorting arrays
val = fruit.sort();
console.log(val);

const numbers3 = [43, 56, 33, 23, 44, 36, 5, 100];
val = numbers3.sort();
console.log(val); // this is sorted by first index values

// Use the "compare function"
val = numbers.sort(function(x, y){
    return x - y;
});
console.log(val);

// Reverse sort
val = numbers.sort(function(x, y) {
    return y - x;
});
console.log(val);

// Find
function under50(num) {
    return num < 50;
}
const numbers4 = [43, 56, 100, 23, 44, 36, 5];
val = numbers4.find(under50); // find the first under 50 value
console.log(val);