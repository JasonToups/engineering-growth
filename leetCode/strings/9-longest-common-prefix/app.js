/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Constraints:

    0 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lower-case English letters.

 */

var longestCommonPrefix = function(strs) {
  if (!strs[0]) {
    return ""
  }

  // setup a variable for the prefix variable
  let prefix = "";
  let stringIndex = 0;
  let index = 0;
  let currentLetter = "";
  let equal = true

  // for each string in the array, compare the value of the current index.
    // if all of the index values are the same, then add that letter to the prefix string, and move to the next index.
    // if any of the index values are different, then return the prefix string.
    // BUG - current letter should not be updated
  currentLetter = strs[0][0]

  for (let arrayIndex = 0; arrayIndex < strs.length; arrayIndex++) {
    // console.log(`The current letter is ${currentLetter}`);
    if (strs[arrayIndex][stringIndex] === currentLetter) {
      // at the end of the array, if all letters are equal, loop back to the start of the array.
      if (arrayIndex === strs.length - 1) {
        // BUG this is an endless loop.
        prefix += currentLetter;
        arrayIndex = 0
        stringIndex ++;
        currentLetter = strs[arrayIndex][stringIndex]
        // console.log(prefix)
        // console.log('moving to next letter')
        // console.log(`The current letter is ${currentLetter}`);
      }
      // console.log('we have a match')
    } else {
      return prefix;
    }
  }
};

 

//Example 1:

let strs1 = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs1))
// Output: "fl"


// Example 2:

let strs2 = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs2))
// Output: ""
// Explanation: There is no common prefix among the input strings.
