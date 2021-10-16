//twoSum.js
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log("Nums i " + nums[i])
    for (let j = i + 1; j < nums.length; j++) {
      console.log("Nums j " + nums[j])
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

console.log(twoSum([3, 2, 4], 6))