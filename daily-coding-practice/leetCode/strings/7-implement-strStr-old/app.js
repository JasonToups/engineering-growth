/* 
Implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? 
This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf(). 

Constraints:

    0 <= haystack.length, needle.length <= 5 * 104
    haystack and needle consist of only lower-case English characters.

*/

var strStr = function(haystack, needle) {
  if (!needle.length && !haystack.length) return 0;
  // flag for if we have a match
  let match = false;
  // keeping track of the index where the first instance of needle appears in haystack
  let firstMatch = null;
  // TODO - Add the logic for matchingString in the function
  // building the matching string from each letter in haystack.
  let matchingString = "";
  // when matchingString equals needle, return firstMatch
  for (let i = 0; i < haystack.length; i++) {
    // console.log(haystack[i])
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] === haystack[i] && match === false) {
        console.log('we have a match')
        match = true;
        firstMatch = i;
        matchingString = matchingString.concat(haystack[i]);
        // console.log(matchingString)
        break
      } else if (needle[j] === haystack[i] && match === true) {
        // console.log(i)
        // console.log(j)
        console.log('we have a matching next letter');
        matchingString = matchingString.concat(haystack[i]);
        console.log(matchingString);
        break
      } else if (needle[j] !== haystack[i] && match === true &&matchingString === needle) {
        match = false;
        console.log("we don't have anymore matching letters")
      }
    }
  }
  if (match === false) {
    // console.log('no matches')
    return -1
  } else if (haystack.length === 0 && needle.length === 0) {
    // console.log('empty strings')
    return 0
  } else {
    // console.log('first match')
    return firstMatch
  }  
};


// Testing

// Example 1:
let haystack1 = "hello";
let needle1 = "ll";
// needle1 is included in haystack1 at index 2
// Output: 2
console.log("output 1 should be 2");
console.log(strStr(haystack1, needle1));

// Example 2:
let haystack2 = "aaaaa";
let needle2 = "bba";
// needle2 is not included in haystack2 at all
// Output: 2
console.log("output 2 should be -1");
console.log(strStr(haystack2, needle2));

// Example 3:
let haystack3 = "";
let needle3 = "";
// both haystack3 and needle3 are empty strings
// Output: 2
console.log("output 3 should be 0");
console.log(strStr(haystack3, needle3));

/* Marco's solution

const strStr = (haystack, needle) => {
  if (!needle.length && !haystack.length) return 0;
  let last = needle.length;
  let solved = false;
  for (let i = 0; i < haystack.length; i++) {
    let chunk = haystack.slice(i, last);
    // console.log(chunk);
    if (chunk === needle) {
      solved = true;
      return i;
    }
    last++;
  }
  if (!solved) return -1;
}; */