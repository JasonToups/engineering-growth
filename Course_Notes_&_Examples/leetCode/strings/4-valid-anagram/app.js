/* 
Valid Anagram

Solution
Given two strings s and t , write a function to determine if t is an anagram of s.

You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* 
PLAN
I could create an object to count all of the letters, by adding a count to each letter.
Then loop through the t string, and remove the letters from the count object.
  If a letter does not exist in the object, then return false.
If the previous loop completes:
Then loop through the s string, and see if there are any counts that are not 0.
*/
var isAnagram = function(s, t) {
  console.log(s);
  console.log(t);

  return false
};

// Example 1:

var s = "anagram";
var t = "nagaram"

console.log(isAnagram(s,t))
// Output: true

// Example 2:

var s1 = "rat"
var t1 = "car"

console.log(isAnagram(s,t))
// Output: false
