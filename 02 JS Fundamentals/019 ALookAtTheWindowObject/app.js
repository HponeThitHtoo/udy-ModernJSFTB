// WINDOW METHODS / OBJECTS / PROPERTIES

// console.log(123);

// Alert
// alert('Hello World');

// Prompt
/* const input = prompt();
alert(input);
*/

// Confirm
/* if (confirm('Are you sure')) {
    console.log('YES');
} else {
    console.log('NO');
} */

let val;

// Outter Height and Width
/* val = window.outerHeight;
console.log(val);
val = window.outerWidth;
console.log(val); */

// Inner Height and Width
/* val = window.innerHeight;
console.log(val);
val = window.innerWidth;
console.log(val); */

// Scroll points
/* val = window.scrollY;
console.log(val);
val = window.scrollX; */

// Location Object
/* val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // if url >> http://127.0.0.1:500/?id=2&name=standard >> ?id=2&name=standard */

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// History Object
// window.history.go(-1); // go back one step, (-2) go back two step, etc
// val = window.history.length; // all history count

// Navigation Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);