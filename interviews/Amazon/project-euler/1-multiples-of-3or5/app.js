/* Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

/* 
PLAN

input number
output number {sum}

Use the modulus operator to check all of the numbers from 1 - input to see if the number is divisible by 3 or 5, then add it to the sum.
  If the number is divisible by both, only add it once to the sum.
*/

function multiplesThreeFive (number) {
  let sum = 0;
	return sum;
};




var n = 10
console.log(multiplesThreeFive(n))
// Output: "23"
// Explanation: The sum of all multiples of 3 or 5 below 10 is 23


var n = 1000
// console.log(multiplesThreeFive(n))
// Output: "?"
