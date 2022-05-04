/* 
Given two arrays, write a function to compute their intersection.

Note:

    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.

Follow up:

    What if the given array is already sorted? How would you optimize your algorithm?
    What if nums1's size is small compared to nums2's size? Which algorithm is better?
    What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

 */

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) 
{
  let pointer1 = 0, pointer2 = 0;
  let intersect = [];
  
  // the arrays need to be set to a type, in order for sort to sort the integers correctly.
  nums1 = new Float64Array(nums1);
  nums2 = new Float64Array(nums2);
  nums1 = nums1.sort();
  nums2 = nums2.sort();
  
  // console.log(nums1);
  // console.log(nums2);

  while (pointer1 < nums1.length && pointer2 < nums2.length) 
  {
    if (nums1[pointer1] < nums2[pointer2]) 
    { 
      // console.log(`${nums1[pointer1]} is less than ${nums2[pointer2]}`);
      pointer1++;
    } 
    else if (nums1[pointer1] > nums2[pointer2]) 
    {
      // console.log(`${nums1[pointer1]} is more than ${nums2[pointer2]}`);
      pointer2++;
    } 
    else 
    {
      // console.log(`${nums1[pointer1]} is equal to ${nums2[pointer2]}`);
      intersect.push(nums1[pointer1]);
      pointer1++;
      pointer2++;
    }
  }
  return intersect;
}

// Example 1:
var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];
console.log(intersect(nums1, nums2));
console.log("Output: [2, 2]");

// Example 2:
var nums1 = [4, 9, 5];
var nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));
console.log("Output: [4, 9]");

// Example 3:
var nums1 = [2, 1];
var nums2 = [1, 2];
console.log(intersect(nums1, nums2));
console.log("Output: [1, 2]");

// Example 4:
var nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81];
var nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48];
console.log(intersect(nums1, nums2));
let example4Out = [5,4,57,79,7,89,88,45,34,92,38,85,6,0,77,44,61].sort();
console.log(`Output ${example4Out}`);


