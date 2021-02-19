const num1 = 100;
const num2 = 50;
let valSimple;

// Simple math with numbers
valSimple = num1 + num2;
valSimple = num1 * num2;
valSimple = num1 - num2;
valSimple = num1 / num2;
valSimple = num1 % num2;

console.log(valSimple);

// Math Object
valMath = Math.PI;
valMath = Math.E;
valMath = Math.round(2.8);
valMath = Math.ceil(2.8);
valMath = Math.floor(2.8);
valMath = Math.sqrt(64);
valMath = Math.abs(-3);
valMath = Math.pow(8, 2);
valMath = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
valMath = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
console.log(valMath)

/* Working with Math.random() */
// Math.random() generates a decimal number. To get whole numbers, we need to work with this.
valRandom = Math.random();
console.log(valRandom);
// Multiplying it by twenty will move the decimal place back 2 places, and generate a number between 1 - 19.
valRandom2 = Math.random() * 20;
console.log(valRandom2);
// Then we need to add one to that to get a number from 1 - 20.
valRandom3 = Math.random() * 20 + 1;
console.log(valRandom3);
// Wrap all of it in Math.floor to get a whole number.
valRandom4 = Math.floor(Math.random() * 20 + 1);
console.log(valRandom4);

