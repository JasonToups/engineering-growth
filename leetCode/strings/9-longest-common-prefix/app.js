/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Constraints:

    0 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lower-case English letters.

 */

var longestCommonPrefix = function(strs) {
  // if you enter nothing, then you receive an empty string
  if (!strs[0]) {
    return ""
    // if you enter a single word in an array, you will receive the same word
  } else if (strs.length === 1) {
    return strs[0]
  }

  let prefix = "";
  let stringIndex = 0;
  let currentLetter = "";

  currentLetter = strs[0][0]

  for (let arrayIndex = 0; arrayIndex < strs.length; arrayIndex++) {
    if (strs[arrayIndex][stringIndex] === currentLetter) {
      // if the length of the prefix is equal to the length of the first word in the array, there are no more matches to check, so return the prefix.
      if (prefix.length === strs[0].length) {
        return prefix
      }
      // at the end position of the array, if all letters at the same index are equal, do the following;
      // TODO Optimization - this could be moved outside of the loop, and remove the conditional.
      else if (arrayIndex === strs.length - 1) {
        // append the currentLetter to prefix
        prefix += currentLetter;
        // loop back to the start of the array, by setting the arrayIndex to 0
        arrayIndex = 0
        // and add 1 to the stringIndex pointer.
        stringIndex ++;
        // set the currentLetter to the updated arrayIndex and stringIndex.
        currentLetter = strs[arrayIndex][stringIndex]
      }
    } else {
      // if one of the letters in the current loop isn't the same as the current letter, return the prefix
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

// Example 3;

let strs3 = ["a"]
console.log(longestCommonPrefix(strs3))
// Output: "a"

