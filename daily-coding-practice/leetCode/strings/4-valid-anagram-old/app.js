/* 
Valid Anagram

Solution
Given two strings s and t , write a function to determine if t is an anagram of s.

You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/
console.log("Valid Anagram");
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;

  // initialize map variable: empty object
  const map = {}
  // initialize answer variable
  let answer = true;

  for(let char of s) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  for(let char2 of t) {
    map[char2] ? map[char2]-- : answer = false;
  }

  return answer
  
};

// Example 1:

let s = "anagram";
let t = "nagaram"

console.log(isAnagram(s,t))
// Output: true

// Example 2:

let s1 = "rat"
let t1 = "car"

console.log(isAnagram(s1,t1))
// Output: false
