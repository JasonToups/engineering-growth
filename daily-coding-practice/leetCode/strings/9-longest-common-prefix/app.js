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
At each index, check the stringIndex character of the arrayIndex string & compare that character to the next arrayIndex string at the same stringIndex.
  If the characters match, then move onto the next string.
  If the characters don't match, then break the loop.
  If the final string index is reached, then we have a start of the common prefix.
    We should save that character to the return string, by setting the return string to a substring of the current string by passing in (0, stringIndex).
    And we should reset the arrayIndex to 0;
    And increment the stringIndex by 1.

The end condition of the loop is stringIndex < array[0].length.

*/

function longestCommonPrefix (stringsArray) {
  // Check for immediate negative conditions
  if (stringsArray.length === 0) {
    return '';
  } else if (stringsArray.length === 1) {
    return stringsArray[0];
  }

  // return string
  let returnString = '';
  // pointers
  let arrayIndex = 0;
  let stringIndex = 0;
  // Loop break flag
  let hasPrefix = true;

  while (hasPrefix) {
    if (stringIndex > stringsArray[arrayIndex].length - 1) {
      console.log('stringIndex > stringsArray[arrayIndex].length - 1')
      hasPrefix = false;
    } 
    else if (stringsArray[arrayIndex][stringIndex] === stringsArray[arrayIndex + 1][stringIndex] && arrayIndex <= stringsArray[0].length - 2) {
      if (arrayIndex === stringsArray.length - 2) {
        returnString += stringsArray[arrayIndex][stringIndex];
        arrayIndex = 0;
        stringIndex++;
      }
      else {
        arrayIndex++;
      }
      // console.log(stringsArray[arrayIndex][stringIndex]);
    }
    else {
      // BUG - debugging the ["c","c"] case, since it returns early here.
      console.log('else hasPrefix = false');
      hasPrefix = false;
    }
  }
  return returnString;
};

/* 
Possible nested 2 while loops
function longestCommonPrefix (stringsArray) {
  // Check for immediate negative conditions
  if (stringsArray.length === 0) {
    return '';
  } else if (stringsArray.length === 1) {
    return stringsArray[0];
  }

  // return string
  let returnString = '';
  // pointers
  let arrayIndex = 0;
  let stringIndex = 0;
  // Loop break flag
  let hasPrefix = true;

  while (hasPrefix) {
    // create a while loop that only loops through the stringsArray
    while (arrayIndex <= stringsArray.length - 2) {
      // check the current stringIndex character of the arrayIndex string & compare that character to the next arrayIndex string at the same stringIndex.
      // this is the end condition of the loop
      if (stringsArray[arrayIndex][stringIndex] === stringsArray[arrayIndex + 1][stringIndex]) {
        if (arrayIndex === stringsArray.length - 2) {
          // if the characters match, and we're at the end of the comparison, then we have a start of the common prefix.
          returnString += stringsArray[arrayIndex][stringIndex];
          // start the loop over again
          arrayIndex = 0;
          // compare the next stringIndex
          stringIndex++;
        } 
        else {
          // if the characters match, then move onto the next string.
          arrayIndex++;
        }
      }
      else {
        // if the characters don't match, then break the loop.
        hasPrefix = false;
        break;
      }
      console.log(arrayIndex)
    }
  return returnString;
}; 
*/


/* TESTS */

/* var stringsArray = ["flower","flow","flight"]
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
console.log(longestCommonPrefix(stringsArray)) */

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


/* // Example 3 - passed;
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

 */