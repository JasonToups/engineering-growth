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

FIX
I don't think I can use the parseInt approach, because of the decimal restriction, so I should loop through the back of the array, and set logic to add one to the end.
If the current index number is less than 9, then add one & return the num aray.
If the current index number is 9, then set the current index to 0, and add 1 to the previous index.

If the previous index is 9, then set the current index to 0, and keep checking previous indexes until the current index is not 9.

Create a conditional for if the number at the 0 index is 9, then unshift a 1 to the front of the array.

Nothing has worked, I think I need to create a variable to track if we are carrying the 1 or not, and redo this whole thing.

I may need to set the index to be 2 less than the length, and work backwards until the index is 0, then compare to the following index.

 */

var plusOne = function (digits) {
  if (digits.length === 1) {
    if  (digits[0] === 9) {
      digits[0] = 0;
      digits.unshift(1);
      return digits;
    } else {
      digits[0]++;
      return digits;
    } 
  } else {
    let i = digits.length - 2;
    while (i >= 0) {
      if (digits[i + 1] === 9 && i > 0) {
        digits[i + 1] = 0;
      } else if (digits[i + 1] === 9 && i === 0 && digits[i] < 9) {
        digits[i]++;
        digits[i + 1] = 0;
      } else if (digits[i + 1] === 9 && i === 0 && digits[i] === 9) {
        digits[1] = 0;
        digits[0] = 0;
        digits.unshift(1);
        return digits;
      } else {
        digits[i + 1]++;
        return digits;
      }
      i--;
    }
    return digits;
  }
};

// Example 6:
var digits = [9,9]
console.log(digits);
console.log(plusOne(digits));
console.log("Should return Output: [1,0,0]")
/* Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0]. */

// Example 5:
var digits = [8,9,9,9]
console.log(digits);
console.log(plusOne(digits));
console.log("Should return Output: [9,0,0,0]")
/* Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0]. */

// Example 3:
var digits = [9]
console.log(digits);
console.log(plusOne(digits));
console.log("Should return Output: [1,0]")
/* Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0]. */

// Example 1:
var digits = [1, 2, 3]
console.log(digits);
console.log(plusOne(digits));
console.log("Should return Output: [1,2,4]")
/* Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4]. */

// Example 2:
var digits = [4, 3, 2, 1]
console.log(digits);
console.log(plusOne(digits));
console.log("Should return Output: [4,3,2,2]")
/* Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2]. */


// Example 4:
var digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(digits);
console.log(plusOne(digits));
console.log("Should return Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]")
/* Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0]. */

