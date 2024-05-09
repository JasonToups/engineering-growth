// var, let, const

//this is an older form of declaring a variable, where the variable can be overwritten. 
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Init var
var greeting;
// undefined, since greeting was not assigned a value.
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// Variables can be letters, numbers, _, $
// Cannot start with a number


//Multi word vars
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname; // bad practice

// LET
// Functions similar to 'var' but is an updated version of it, introduced in ES6
let nameLet = 'John Doe';
console.log(nameLet);
nameLet = 'Steve Smith';
console.log(nameLet);

//CONST
// Introduced in ES6, and is sort for Constant, as in a const variable cannot be reassigned once declared.
const nameConst = 'John';
console.log(nameConst);
// Cannot reassign
// nameConst = 'Sara';

// Have to assign a value
// const greetingConst;
// Produces the error: 'Uncaught SyntaxError: Missing initializer in const declaration'

const person = {
  name: 'John',
  age: 30
}
console.log(person);

// The const declared object can be mutated though
person.name = 'Sara';
person.age = 32;
console.log(person);

// A const declared array can be mutated as well.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers);

/* One way to work with variables is to use CONST to declare them, unless you plan on overwriting the variable, then use LET.

LET can be used in an iterator and loop.

Another notable thing about using CONST is, whenever anyone is reading your code, it becomes obvious that you are delcaring a variable that should not be reassigned.
 */