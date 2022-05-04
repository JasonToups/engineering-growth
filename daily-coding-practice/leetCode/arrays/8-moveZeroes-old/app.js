/* 
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

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

/* This doesn't work, but it uses JS methods */
var moveZeroes = function(nums) {
  console.log(nums)
  for (let i = 0; i < nums.length; i++){
    console.log(nums[i])
    if (nums[i] === 0) {
      // console.log(nums.splice(nums[i], 1));
      nums.splice(nums[i], 1);
      nums.push(0);
      console.log(nums)
      // i--;
    }
  } 
  return nums
};

/* This works, without methods */
// var moveZeroes = function(nums) {
//   let zeroes = 0;
//   let currentIndex = 0;
//   for(let i=0; i<nums.length; i++){
//       if(nums[i]===0){
//           zeroes++;
//       } else {
//           nums[currentIndex] = nums[i];
//           currentIndex++;
//       }
//   };
//   for(let i = nums.length-1; zeroes>0 ; i--){
//       nums[i] = 0;
//       zeroes--;
//   }
//   return nums;
// };

let num1 = [0,1,0,3,12]
// Output: [1,3,12,0,0]
console.log(moveZeroes(num1))
let num2 = [0,0,0,3,12]
// Output: [3,12,0,0, 0]
console.log(moveZeroes(num2))