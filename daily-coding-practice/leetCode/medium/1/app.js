/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Constraints:

    0 <= stringsArray.length <= 200
    0 <= stringsArray[i].length <= 200
    stringsArray[i] consists of only lower-case English letters.

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

We are going to base all of the comparisons on the first string in the array.

The outer loop will be the string index within the first string in the array.
The inner loop will be the index of the array of strings.

Starting with the first letter of the first string, compare it to the first letter of the next string.
If the letters don't match, return the returnString.
If they do match, keep going through the array of strings, comparing the same letter to the next letter until you reach the last string in the array.
After reaching the last string in the array, we will add the current stringIndex letter to the return string, & increment the stringIndex, and loop through the array again.

*/

var longestCommonPrefix = function(stringsArray) {
  if (stringsArray.length === 0) return '';
  let returnString = '';
  for (let stringIndex = 0; stringIndex < stringsArray[0].length; stringIndex++) {
    for (let arrayIndex = 1; arrayIndex < stringsArray.length; arrayIndex++) {
      if (stringsArray[0][stringIndex] !== stringsArray[arrayIndex][stringIndex]) {
        return returnString;
      }
    }
    returnString += stringsArray[0][stringIndex];
  }
  return returnString;
};


/* TESTS */

var stringsArray = ["flower","flow","flight"]
console.log(stringsArray);
console.log("Output: fl");
console.log(longestCommonPrefix(stringsArray));

stringsArray = ["dog","racecar","car"]
console.log(stringsArray);
console.log('Output: ""');
console.log(longestCommonPrefix(stringsArray))
// Explanation: There is no common prefix among the input strings.

stringsArray = ["ab", "a"]
console.log(stringsArray.length);
console.log(stringsArray);
console.log('Output: a');
console.log(longestCommonPrefix(stringsArray)) 

stringsArray = ["flower","flower","flower","flower"]
console.log(stringsArray.length);
console.log(stringsArray);
console.log('Output: flower');
console.log(longestCommonPrefix(stringsArray))

stringsArray = ["c","c"]
console.log(stringsArray.length);
console.log(stringsArray);
console.log('Output: c');
console.log(longestCommonPrefix(stringsArray))

// Example 3 - passed;
stringsArray = ["a"]
console.log(stringsArray);
console.log('Output: a');
console.log(longestCommonPrefix(stringsArray))
// Output: "a"

// Example 4 - passed;
stringsArray = [""]
console.log(stringsArray);
console.log('Output: ""');
console.log(longestCommonPrefix(stringsArray))
// Output: "a"
