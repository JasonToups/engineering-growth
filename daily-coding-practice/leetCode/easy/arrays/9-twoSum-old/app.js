/* 
Given an array of integers nums and integer target, return the indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

/* 
Input Array of nums & Target
Output Array of indices

Start a loop through the input array.
Set a return variable to an empty array.
  At each index of the loop, add the current index to the next one.
    An internal loop would continue to add the outer index with the internal index, and compare them to the target.
      If the target is met, then push the outer index and the inner index to the return array.
      return the return array.
*/

// Brute force works, Time complexity On^2
// var twoSum = function(nums, target) {
//   const result = [];
//   for(let i =0; i<nums.length; i++){
//       for(let j=1; j< nums.length; j++){
//           if(i !== j && nums[i] + nums[j] === target){
//               result.push(i,j);
//               return result;
//           };
//       };
//   };
// };
// Single loop from other user submission.
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};

// Example 1:

//Input:
nums = [2, 7, 11, 15];
target = 9;
console.log(twoSum(nums, target));
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1]

// Example 2:
// Input:
nums = [3, 2, 4];
target = 6;
console.log(twoSum(nums, target));
// Output: [1,2]

//Example 3:
//Input:
nums = [3, 3];
target = 6;
console.log(twoSum(nums, target));
// Output: [0,1]


nums = [3, 2, 3]
target = 6
console.log(twoSum(nums, target));
// Output [0,2]
