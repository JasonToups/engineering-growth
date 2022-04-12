/* 
PLUS ONE

Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

/*
 * @param {number[]} digits
 * @return {number[]}
 */

/* Pseudocode
convert the array to a string, without commas
convert the string to an integer
add 1 to the integer
convert the integer to a comma-separated string
convert the string to an array

ISSUE - parseInt
ParseInt is not parsing the full integer, and is stopping at around index 16
 */

var plusOne = function (digits) {

  digits = (parseInt((digits.join('')) + 1)).toString().split('');
  // console.log(typeof(digits));
  return digits;
};



// Example 1:
var digits = [1, 2, 3]
console.log(plusOne(digits));
console.log("Should return Output: [1,2,4]")
/* Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4]. */

// Example 2:
var digits = [4, 3, 2, 1]
console.log(plusOne(digits));
console.log("Should return Output: [4,3,2,2]")
/* Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2]. */

// Example 3:
var digits = [9]
console.log(plusOne(digits));
console.log("Should return Output: [1,0]")
/* Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0]. */

// Example 4:
var digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(digits));
console.log("Should return Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]")
/* Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0]. */