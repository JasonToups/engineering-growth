/* Primitive Data Types vs. Reference Types */

/*
Primitive Data Types are stored directly in the location the variable accesses.
They are also stored on the stack.
*/

/* These are the 6 Primitive Data Types:
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbols (ES6) */

/*
Reference Data Types are accessed by reference.
They are sObjects that are stored on the heap.
A pointer to a location in memory.
*/

/* These are the 5 Reference Data Types / Objects
1. Arrays
2. Object Literals
3. Functions
4. Dates
5. Anything Else...
*/

/* Javascript is a Dynamically Types Language.
Types are associated with values not variables.
The same variable can hold multiple types.
We do not need to specify types.
Most other languages are statically typed (Java, C#, C++).
These are supersets of JS and addons to allow static typing(TypeScript, Flow) */

// PRIMITIVE

// String
const name = 'John Doe';
console.log(typeof name);
// Number
const age = 45;
console.log(typeof age);
// Boolean
const hasDogs = true;
console.log(typeof hasDogs);
// Null
const car = null;
console.log(typeof car);
// Undefined
let test;
console.log(typeof test);
// Symbol
const sym = Symbol();
console.log(typeof sym)

/* REFERENCE TYPES - Objects */
// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);