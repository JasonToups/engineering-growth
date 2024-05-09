/* 
PROBLEM

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4

 */

/*
Constraints:

  1 <= nums.length <= 3 * 104
  -3 * 104 <= nums[i] <= 3 * 104
  Each element in the array appears twice except for one element which appears only once.

 */

/* Solution Plan

I could create an object to log each time a number is encountered, as a unique property, and then add 1 to the value.

Then after going through the nums array, look for the number that only has the value of 1.
 */

var singleNumber = function (nums) {
  let map = {};
  
  for (num in nums){
    map[nums[num]] = map[nums[num]] + 1 || 1;
  }

  for (key in map) {
    if (map[key] === 1) return key
  }
};

console.log(singleNumber([2, 2, 1]));
// return 1
console.log(singleNumber([4, 1, 2, 1, 2]));
// return 4
