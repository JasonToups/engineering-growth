/* 
Reverse String

Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

*/
//  This works, but it doesn't follow the memory requirements
/* var reverseString = function(s) {
  return s.reverse();
}; */

var reverseString = function(s) {
  let start = 0;
  let end = s.length - 1;
  console.log(start)
  console.log(end)
  // loop through the array, and grab the value of the current index.
  // Swap the values with the end of the array.
  // Add one to start
  // subtract one from end
  // if start index is less than or equal to end index, return s.
  while ( start <= end) {
    let hold = s[start];
    s[start] = s[end];
    s[end] = hold;
    start ++
    end --
  }
  return s
};

/* Most popular minimal time complexity
/**
  @param {character[]} s
  @return {void} Do not return anything, modify s in-place instead.
  Unpack this later
 */
var reverseString = function(s) {
  let attempts = s.length % 2 ? (s.length - 1) / 2 :(s.length) / 2
  
  for (let i = 0; i < attempts; i++) {
      [s[i], s[s.length - i -1]] = [s[s.length - i -1], s[i]]
  }
};

*/

// Example 1:
var input = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
reverseString(input)

// Example 2:
var input2 = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
reverseString(input2)