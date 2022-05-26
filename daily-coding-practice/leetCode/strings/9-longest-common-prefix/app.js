/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Constraints:

    0 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lower-case English letters.

 */

var longestCommonPrefix = function(strs) {
  
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

