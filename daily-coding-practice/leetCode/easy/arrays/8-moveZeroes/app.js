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
  set pushNum to the amount of elements to push
    If it is 0 & the following index is zero, add one to pushNum.
    If it is 0 & the following index is not zero, then splice the current index and push it to the end of the array.
    nums.push(nums.splice(i, pushNum))
    If it is not 0, then move to the next index & set pushNum to 1.

  return nums
    
*/

var moveZeroes = function(nums) {
  let index = 0, pushNum = 1;
  while (index < nums.length) {
    if (nums[index] === 0 && nums[index + pushNum] === 0 ) {
      pushNum++;
    } else if (nums[index] === 0 && nums[index + pushNum] != 0 ) {
      nums.push(...nums.splice(index, pushNum));
      index++;
      pushNum = 1;
    } else {
      index++
      pushNum = 1;
    }
  }
  return nums
};

var num = [4,2,4,0,0,3,0,5,1,0]
console.log(num)
console.log(moveZeroes(num))
console.log("Output: [4,2,4,3,5,1,0,0,0,0]")

/* var num = [4,2,4,0,0,3,0,5,1,0]
console.log(num)
console.log(moveZeroes(num))
console.log("Output: [4,2,4,3,5,1,0,0,0,0]") */

/* var num = [0,1,0,3,12]
console.log(num)
console.log(moveZeroes(num))
console.log("Output: [1,3,12,0,0]")

var num = [0,0,0,3,12]
console.log(num)
console.log(moveZeroes(num))
console.log("Output: [3,12,0,0, 0]") */