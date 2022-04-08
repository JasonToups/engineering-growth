/* 
PROBLEM

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true

Example 2:

Input: [1,2,3,4]
Output: false

Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

 */

/* SOLUTION */
/*
 * @param {number[]} nums
 * @return {boolean}
 */

/* PSEUDOCODE */
// Input: Array
// Output: Boolean

/* 
Use the Set object to store a collection of unique values.
Then compare the length of the original nums array with the Set.
The set needs to be converted back to an array, so use the Array.from method, which will convert the set back to an array. Instead, I could use the spread operator to convert back to an array.

*/

var containsDuplicate = function (nums) {
  let unique = Array.from(new Set(nums));

  if (unique.length === nums.length) {
    return false;
  } else {
    return true;
  }
};

console.log(containsDuplicate([1, 2, 3, 1]));
// return true
console.log(containsDuplicate([1, 2, 3, 4]));
// return false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// return true
