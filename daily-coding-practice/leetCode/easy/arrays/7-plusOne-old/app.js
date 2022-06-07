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
 Loop through array, starting at the end
  From the back of the array, add one to the integer
    if the integer is not a 9, add one
    if the integer is a 9, make the integer a 0 and carry one over to the next integer.

 */

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i] += 1;
      return digits;
    } else {
      if (i === 0) {
        digits[i] = 0;
        digits.unshift(1);
        return digits;
      } else {
        digits[i] = 0;
        console.log(digits[i]);
      }
    }
  }
  return digits;
};

// NOT WORKING
// var plusOne = function (digits) {
//   console.log((parseInt(digits.join('')) + 1).toString().split(''));
//   return (parseInt(digits.join('')) + 1).toString().split('');
// };

// Example 1:

console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 9]));
console.log(plusOne([9, 9, 9]));
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

/* Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321. */
