/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Constraints:

    0 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lower-case English letters.

*/

/* 
Inputs:
Array of Strings, of various sizes

Outputs:
String - longest common prefix from the array of strings

Test Cases:
Success - ["flower","flow","flight"]
Failure - ["dog","racecar","car"]

Edge Cases:
Failure - [""] - if the array length is 0, return an empty string
Success - ["a"] - if the array length is 1, return the first string

PLAN:
We don't need to split the strings into arrays, we can just compare the first letter of each string, using bracket notation.

The challenge will be the break condition of the loop. 
Since we need to loop back to the beginning of the array only if all of the letters in the current index matches.

We should use a while loop with two pointers.

Pointers:
1. arrayIndex - The first pointer will be the current index of the array of strings.
2. stringIndex - The second pointer will be the current index of the current string.

Return Variable:
1. returnString - The return variable will be the longest common prefix.

Early Return:
If the array length is 0, return an empty string.
If the array length is 1, return the first string.

Loop: 
Loop through the array of strings.
At each index, check the stringIndex character of the arrayIndex string & compare that character to the next arrayIndex string at the same stringIndex.
  If the characters match, then move onto the next string.
  If the characters don't match, then break the loop.
  If the final string index is reached, then we have a start of the common prefix.
    We should save that character to the return string, by setting the return string to a substring of the current string by passing in (0, stringIndex).
    And we should reset the arrayIndex to 0;
    And increment the stringIndex by 1.

The end condition of the loop is stringIndex < array[0].length.

*/

var longestCommonPrefix = function(strs) {
  // Check for immediate negative conditions
  if (strs.length === 0) {
    return '';
  }

  // Setup return string
  let returnString = '';
  // Setup pointers
  let strsIndex = 0;
  let returnIndex = 0;

  
};

//Example 1:

var strs = ["flower","flow","flight"]
console.log(strs);
console.log("Output: fl");
console.log(longestCommonPrefix(strs));

// Example 2:
strs = ["dog","racecar","car"]
console.log(strs);
console.log('Output: ""');
console.log(longestCommonPrefix(strs))
// Explanation: There is no common prefix among the input strings.

// Example 3;
strs = ["a"]
console.log(strs);
console.log('Output: a');
console.log(longestCommonPrefix(strs))
// Output: "a"

// Example 4:;
strs = [""]
console.log(strs);
console.log('Output: ""');
console.log(longestCommonPrefix(strs))
// Output: "a"

