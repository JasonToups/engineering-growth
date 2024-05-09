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

/* Plan for optimization
The current code doesn't work for the last test case, since we are basing everything off of length, and not the times that the operation needs to happen.

So the loop end condition should be k.

popping from the end, and unshifting to the beginning, k times should work

Ok, so this isn't great with time complexity, is JS is re-seating each element in the array under the hood.

Look into this explanation.
https://dev.to/seanwelshbrown/two-ways-to-rotate-an-array-in-javascript-1bi3

https://javascript.plainenglish.io/algorithms-101-rotate-array-in-javascript-three-solutions-260fbc923b64

Looks like I should use splice instead of pop()

And I should create an if / else statement to handle the case where k is larger than the length of nums.

Also use the spread operator to place the grabbed array into place in nums as individual indexes.
*/

var rotate = function(nums, k) {
  if (nums.length > k) {
    nums.unshift( ...nums.splice(-k) );
  } else {
    while(k--) {
      nums.unshift( nums.pop() );
    }
  }
  return nums
};
// Optimize
// placing each element in its original position while keeping track of the element originally in that position. Basically, at every step, we place an element in its rightful position and keep track of the element already there or the one being overwritten in an additional variable.

// Inputs
// var nums = [1, 2, 3, 4, 5, 6, 7];
// var k = 3;
// console.log(rotate(nums, k));
// console.log("Should be: [ 5, 6, 7, 1, 2, 3, 4]");
// var nums =  [-1, -100, 3, 99];
// var k = 2;
// console.log(rotate(nums, k));
// console.log("Should be: [ 3, 99, -1, -100]");
var nums = [1,2];
var k = 5;
console.log(rotate(nums, k));
console.log("Should be: [ 2, 1]");
