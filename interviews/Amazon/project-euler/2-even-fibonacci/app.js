/* Even Fibonacci

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/

/* 
PLAN

input number
output number {sum}

Only add the even numbers in the sequence.

Use the modulus operator to only check for the even numbers

I don't know what number to pass into the function.
Is it 10?
Or 4 million?

TODO - Research Fibonacci sequence.
*/

function evenFibonacci (number) {
  let sum = 0;
  let index = 0;
  let previousIndex = 0;
  while (index <= number) {
    // this is correctly tracking the current & previous index
    if (index % 2 === 0) {
      sum += index + previousIndex;
      previousIndex = index;
      index++
    } else {
      index++
    }
    
  }

	return sum;
};




var n = 10
console.log(evenFibonacci(n))
// Output: "23"
// Explanation: The sum of all multiples of 3 or 5 below 10 is 23


var n = 4000000
console.log(evenFibonacci(n))
console.log("Output should be: 4613732")
