let val;

// Number to string, using the String operator
val = String(5);
val = String(4 + 4);

// Boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4, 5])

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
console.log(val);
val = Number(true);
console.log(val);
val = Number(false);
console.log(val);
val = Number(null);
console.log(val);
val = Number('hello')
console.log(val);

val = parseInt('100.30');
console.log(val);
val = parseFloat('100.30');
console.log(val);

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
// .toFixed() defines the amount of decimal places to include when working with Floats.
console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);