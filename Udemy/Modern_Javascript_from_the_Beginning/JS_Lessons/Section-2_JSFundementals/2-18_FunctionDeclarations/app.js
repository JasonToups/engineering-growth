/* Function Declarations & Expressions */

// FUNCTION DECLARATIONS

function greet() {
  // console.log('Hello');
  return 'Hello';
}

greet()
console.log(greet());

// You can define default values in the arguments
function greet2(firstName = 'John', lastName = 'Doe') {
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet2());
console.log(greet2('Jason', 'Toups'));

// FUNCTION EXPRESSIONS
const square = function (x = 3) {
  return x * x;
}

console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
(function (name) {
  console.log('Hello ' + name);
})('Brad');

// PROPERTY METHODS
const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}
todo.delete = function () {
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();