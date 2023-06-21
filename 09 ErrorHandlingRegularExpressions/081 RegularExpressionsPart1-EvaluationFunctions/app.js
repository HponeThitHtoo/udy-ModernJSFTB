let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search

console.log(re);
console.log(re.source);

// exec() - Return result in an array or null
const result = re.exec('brad hello world');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - Returns true or false
const result2 = re.test('Hello');
console.log(result2);

// match() - Return result array or null
const str = 'Brad Hello There';
const result3 = str.match(re);
console.log(result3);

// search() - Returns index of the first match, if not found returns -1
const str2 = 'Brad Hello There';
const result4 = str2.search(re);
console.log(result4);

// replace() - Return new string with some or all matches of a pattern
const str3 = 'Hello There Hello';
// const newStr = str3.replace(re, 'Hi');
const newStr = str3.replace(/hello/ig, 'Hi');
console.log(newStr);