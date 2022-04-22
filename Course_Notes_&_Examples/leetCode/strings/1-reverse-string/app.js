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

/* I could loop through the string array
Starting with the second index, remove the index & unshift it to the start of the array.
Do this as many times as the length of the array.
I could do this as 1 operation with splice.
s.splice(0, 1 , s[index])
*/

var reverseString = function(s) {
  let index = 0;
  while (index < s.length) {
    s.unshift(...s.splice(index, 1));
    index++
  }
  return s;
};

/* Most popular minimal time complexity
/**
  @param {character[]} s
  @return {void} Do not return anything, modify s in-place instead.
  Unpack this later
 */


// Example 1:
var input = ["h","e","l","l","o"]
var output = ["o","l","l","e","h"]
console.log(`Function Return:`)
console.log(reverseString(input))
console.log(`Output:`)
console.log(output)

// Example 2:
// var input = ["H","a","n","n","a","h"]
// var output = ["h","a","n","n","a","H"]
// console.log(`Function Return:`)
// console.log(reverseString(input))
// console.log(`Output:`)
// console.log(output)
