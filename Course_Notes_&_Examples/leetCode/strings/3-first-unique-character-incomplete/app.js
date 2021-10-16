/* 
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Note: You may assume the string contains only lowercase English letters.

*/

/**
 * @param {string} s
 * @return {number}
 */

// Marco's Answer

const firstUniqChar = (string) => {
  const map = {};
  let ans = 0;
  // building map of characters in string
  for (let i = 0; i < string.length; i++) {
    map[string[i]] ? map[string[i]]++ : (map[string[i]] = 1);
  }
  console.log(map)
  // looping through string, to check for the first letter that only has a count of 1.
  for (let j = 0; j < string.length; j++) {
    if (map[string[j]] === 1) {
      return j;
    }
  }
  return -1;
};

// Examples:

var s = 'leetcode';
console.log(firstUniqChar(s));
// return 0;

var s1 = 'loveleetcode';
console.log(firstUniqChar(s1));
// return 2;

var s2 = 'cc';
console.log(firstUniqChar(s2));
// return -1;


