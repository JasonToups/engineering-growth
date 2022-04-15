/* 
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.

Follow up: Could you minimize the total number of operations done?

*/

/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* 
Take the array and loop through it
  at each index of the loop we will check if the value is 0
    If it is 0, then splice the current index and push it to the end of the array.
    If it is not 0, then move to the next index.

  return nums
    
*/

var moveZeroes = function(nums) {
  
  return nums
};

var num = [0,1,0,3,12]
console.log(num)
console.log(moveZeroes(num))
console.log("Output: [1,3,12,0,0]")

var num = [0,0,0,3,12]
console.log(num)
console.log(moveZeroes(num))
console.log("Output: [3,12,0,0, 0]")