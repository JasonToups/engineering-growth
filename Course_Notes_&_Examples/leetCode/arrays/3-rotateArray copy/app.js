/* 
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

    Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
    Could you do it in-place with O(1) extra space?

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Constraints:

    1 <= nums.length <= 2 * 10^4
    It's guaranteed that nums[i] fits in a 32 bit-signed integer.
    k >= 0


 */

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* MUTATE NUMS */

var rotate = function(nums, k) {
  let numsSplice = nums.splice(nums.length - k, k);
  // console.log(numsSplice);
  for (let i = numsSplice.length - 1; i >= 0 ; i--) {
    nums.unshift(numsSplice[i]);
  }
  return nums;
};
// Optimize
// placing each element in its original position while keeping track of the element originally in that position. Basically, at every step, we place an element in its rightful position and keep track of the element already there or the one being overwritten in an additional variable.

// Inputs
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
console.log(rotate(nums, k));
console.log("Should be: [ 5, 6, 7, 1, 2, 3, 4]");
var nums =  [-1, -100, 3, 99];
var k = 2;
console.log(rotate(nums, k));
console.log("Should be: [ 3, 99, -1, -100]");
var nums = [1,2];
var k = 5;
console.log(rotate(nums, k));
console.log("Should be: [ 2, 1]");
