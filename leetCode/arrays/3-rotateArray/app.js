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
// Try using nums.unshift() to mutate the array in place.
// First we use unshift() to add a splice of the array to the beginning of the array.
// The ... spread operator will select several elements of the array at one time
// Then the splice() method will get the starting position by subtracting k from the length of the numbers array.
var rotate = function (nums, k) {
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};

/* Brute Force, no space constraints */
/* var rotate = function (nums, k) {
  const a = [];
  console.log('start');
  for (i = k + 1; i < nums.length; i++) {
    console.log(nums[i]);
    a.push(nums[i]);
  }
  for (j = 0; j <= k; j++) {
    console.log(nums[j]);
    a.push(nums[j]);
  }
  nums = a;
  return nums;
}; */
// Inputs
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
console.log(rotate(nums, k));
// Output: [5, 6, 7, 1, 2, 3, 4];
var nums = [-1, -100, 3, 99];
var k = 2;
console.log(rotate(nums, k));
// Output: [5, 6, 7, 1, 2, 3, 4];
