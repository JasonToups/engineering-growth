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

var intersect = function (nums1, nums2) {
  var store, array;
  var number = [];
  if (nums1.length > nums2.length) {
    store = nums1;
    array = nums2;
  } else {
    store = nums2;
    array = nums1;
  }

  for (var i = 0; i < array.length; i++) {
    var v = array[i];
    if (store.indexOf(v) >= 0) {
      store[store.indexOf(v)] = null;
      number.push(v);
    }
  }
  return number;
};

// Example 1:
var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];
console.log(intersect(nums1, nums2));
// Output: [2, 2]

// Example 2:

var nums1 = [4, 9, 5];
var nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));
// Output: [4, 9];

// Example 3:

var nums1 = [2, 1];
var nums2 = [1, 2];
console.log(intersect(nums1, nums2));
// Output: [1, 2];

// FAILING TEST CASE
// Example 4:
var nums1 = [
  43,
  85,
  49,
  2,
  83,
  2,
  39,
  99,
  15,
  70,
  39,
  27,
  71,
  3,
  88,
  5,
  19,
  5,
  68,
  34,
  7,
  41,
  84,
  2,
  13,
  85,
  12,
  54,
  7,
  9,
  13,
  19,
  92,
];
var nums2 = [
  10,
  8,
  53,
  63,
  58,
  83,
  26,
  10,
  58,
  3,
  61,
  56,
  55,
  38,
  81,
  29,
  69,
  55,
  86,
  23,
  91,
  44,
  9,
  98,
  41,
  48,
  41,
  16,
  42,
  72,
  6,
  4,
  2,
  81,
  42,
  84,
  4,
  13,
];

console.log(intersect(nums1, nums2));
// Expected Output [2,83,3,41,84,13,9]
