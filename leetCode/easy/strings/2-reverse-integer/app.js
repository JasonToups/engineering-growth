/* 
  Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Constraints:

    -2^31 <= x <= 2^31 - 1

    2147483648
    -2147483648
*/

/* 
PLAN
Create a variable for isNegative & set to false.
Take the integer & convert it to a string.
Take the string & convert it to an array with each digit in a single index.
Check if there's a negative symbol at x[0]; remove it from the array, and set isNegative to true.
Reverse the array of integers.
Convert the reversed array to a string without commas.
Convert the string to an integer.
Check if the integer falls outside of the bounds of 2147483648 -2147483648 (see if I can include these numbers to the powers mentioned in the constraints).

*/

var reverse = function(x) {
  let hold = String(x).split(""), isNegative = false;

  if (hold[0] === '-') {
    isNegative = true;
    hold.shift();
  }

  hold = hold.reverse().join("");
  if (hold < Math.pow(-2, 31) || hold > Math.pow(2, 31)) {
    return 0
  } else if (isNegative) {
    return -hold;  
  }
  return hold;
};

// Example 1:

var input = 123
// Output: 321
// console.log(reverse(input))

// Example 2:

var input = -123
// Output: -321
console.log(reverse(input))

// Example 3:

var input = 120
// Output: 21
// console.log(reverse(input))

// Example 4:

var input = 0
// Output: 0
// console.log(reverse(input))

// Example 5:

var input = 21474836489
// Output: 0
// console.log(reverse(input))

// Example 6:

var input = 1534236469
// // Output: 0
// console.log(reverse(input)) 