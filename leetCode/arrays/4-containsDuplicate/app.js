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

// Take the array and loop through each index
// At each loop of the index:
// Run an internal loop that does the following:
// The index of the outer loop should be compared to the index of the internal loop
// If the value of the internal index is the same as the external index, then return true.
// If the value of the internal index is not equal to the external index, advance forward.
// Advance the external loop forward
// return false

var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
// return true
console.log(containsDuplicate([1, 2, 3, 4]));
// return false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// return true
