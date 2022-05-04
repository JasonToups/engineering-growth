/* Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

/* 
PLAN

input number
output number {sum}

Only add the even numbers in the sequence.

I don't know what number to pass into the function.
Is it 10?
Or 4 million?

TODO - Research Fibonacci sequence.
*/

function evenFibonacci (number) {
  let sum = 0;
  let index = 0;
  while (index < number) {
  
    index++
  }

	return sum;
};




var n = 10
console.log(evenFibonacci(n))
// Output: "23"
// Explanation: The sum of all multiples of 3 or 5 below 10 is 23


var n = 1000
console.log(evenFibonacci(n))
// Output: "233168"
