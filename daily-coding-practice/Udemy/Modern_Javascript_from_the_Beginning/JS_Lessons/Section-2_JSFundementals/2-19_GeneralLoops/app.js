/* General Loops */

// FOR LOOP
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite number');
    // continue to the next iteration of the loop
    continue;
  }
  if (i === 5) {
    console.log('Stop the loop');
    // this breaks out of the loop
    break;
  }

  console.log('For Number ' + i);
}

// WHILE LOOP
let i = 0;
while (i < 10) {
  console.log('While Number ' + i);
  i++;
}

// DO WHILE
// will run at least once
let j = 0;
do {
  console.log('Do While Number ' + j);
  j++;
}

while (j < 10);

// LOOP THOUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (let k = 0; k < cars.length; k++) {
  console.log(cars[k]);
}

// FOR EACH is more concise
cars.forEach(function (car) {
  console.log(car);
})
// OR use arrow notation to trim it down even further
// We can access the index and array as well
cars.forEach((car, index, array) => {
  console.log(`${index} : ${car}`);
  console.log(array);
})

// MAP
// returns a different array
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sarah' },
  { id: 3, name: 'Karen' }
]

const ids = users.map(user => {
  return user.id;
});

console.log(ids);

// FOR IN LOOP - Objects
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}