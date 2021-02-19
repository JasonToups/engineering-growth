/* If Statements & Comparison Operators */

/* 
if (something) {
  do something
} else {
  do something else
} */

const id = '100';

// EQUAL TO "==" Only checks value, not type
if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO "!=" Only checks value, not type
if (id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO "===" Checks value & type. Use triple equals most of the time to avoid errors.
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

if (typeof noID !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

// GREATER OR LESS THAN
if (id > 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
if (id >= 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// IF ELSE
const color = 'red';

if (color === 'red') {
  console.log('Color is red')
} else if (color == 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue')
}

// LOGICAL OPERATORS
const name = 'Steve';
const age = 15;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`)
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`)
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
idNum = 100
console.log(idNum === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if (idNum === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');