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
If the length of both s & t are not equal, return false.
else
I could create an object to count all of the letters, by adding a count to each letter.
Then loop through the t string, and remove the letters from the count object.
  If a letter does not exist in the object, then return false.
If the previous loop completes:
Then loop through the s string, and see if there are any counts that are not 0.
*/
var isAnagram = function(s, t) {
  let count = {};
  let index = 0;
  
  function createCount (string) {
    while (index < string.length) {
      if (count[string[index]]) {
        count[string[index]]++;
      } else {
        count[string[index]] = 1;
      }
      index++;
    }
  }
  
  function deleteCount (string) {
    index = 0;
    while (index < string.length) {
      if (count[string[index]]) {
        count[string[index]]--;
      } else {
        return false
      }
      index++;
    }
  }
  
  function checkZero (string) {
    index = 0;
    while (index < string.length) {
      if (count[string[index]] != 0) {
        return false
      }
      index++;
    }
    return true
  }

  if (s.length !== t.length) {
    return false;
  } else {
    createCount(s)
  }
  
  deleteCount(t)

  return checkZero(s)
};

// Example 1:

var s = "anagram";
var t = "nagaram"

console.log(isAnagram(s,t))
// Output: true

// Example 2:

var s = "rat"
var t = "car"
console.log(isAnagram(s,t))
console.log("Output: false")

var s = "aacc"
var t = "ccac"
console.log(isAnagram(s,t))
console.log("Output: false")
