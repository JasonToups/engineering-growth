/* Arrays & Array Methods */
// Create some arrays by declaring a variable.
const numbers = [43, 56, 33, 23, 44, 36, 5];
// With the constructor method, we can invoke the Array class, and create a new instance of an array.
const numbersConstructor = new Array(22, 45, 76, 54);
// Arrays can be strings too
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// Arrays can be mixed data types
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

console.log(numbers);
console.log(numbersConstructor);
console.log(fruit);
console.log(mixed);

// Get array length
let val = numbers.length;
console.log(val);

// Check if is array
let val2 = Array.isArray(numbers);
console.log(val2);

// Get a single value
let val3 = numbers[3];
console.log(val3);

// Insert into array
numbers[2] = 100;
console.log(numbers);

// Find index of value
let val4 = numbers.indexOf(36);
console.log(val4);

/* Mutating Arrays */
// Push - Add on to end
numbers.push(250);
console.log(numbers);

// Unshift - Add on to front
numbers.unshift(120);
console.log(numbers);

// Pop - Take off from end
numbers.pop();
console.log(numbers);

// Shift - Take off from front
numbers.shift();
console.log(numbers);

// Splice - splice values
numbers.splice(1, 3);
console.log(numbers);

// Reverse - reverse the array
numbers.reverse();
console.log(numbers);

// Concatenate array
let val5 = numbers.concat(numbersConstructor);
console.log(val5);

// Sorting arrays
// alpha
val = fruit.sort();
console.log(val);
// Use the "compare function" to sort numbers
val = numbers.sort(function (x, y) {
  return x - y;
});
console.log(numbers);

// Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});
console.log(numbers);

// Find
const under50 = (num) => {
  return num < 50;
}

val = numbers.find(under50);
console.log(val);