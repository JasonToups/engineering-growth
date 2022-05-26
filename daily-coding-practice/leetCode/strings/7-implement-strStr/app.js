/* 
Implement strStr()

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? 
This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf(). 

Constraints:

    0 <= haystack.length, needle.length <= 5 * 104
    haystack and needle consist of only lower-case English characters.

*/

/* 
Inputs:
haystack - string
needle - string

Plan:
Haystack is the string we are searching in.
Needle is the string we are searching for.

Convert both haystack and needle to an array, and convert each letter to lowercase.

We need a two pointer approach for this:
1 for the haystack array index
1 for the needle array index

Loop through the haystack array, using a while loop that ends when we reach the end of the haystack array.

  If the current letter in the haystack array matches the first letter of the needle array, then we check the rest of the needle array.
  If the the current letter of the needle array does not match the current letter of the haystack array, then we move on to the next letter in the haystack array.

Return:
When the needle array is empty, return 0.
When the needle array is not empty, & doesn't exist in the haystack return -1.
When the needle array exists in the haystack, return the index of the first occurrence of the needle array in the haystack.

*/

var strStr = function(haystack, needle) {
  // Check for immediate negative conditions
  if (needle === '') {
    return 0;
  } else if (needle.length > haystack.length) {
    return -1;
  }
  // setup return index
  let returnIndex = 0;
  // setup pointers
  let haystackIndex = 0;
  let needleIndex = 0;
  // convert haystack & needle to an array
  let haystackArray = haystack.split('');
  let needleArray = needle.split('');

  function hasNeedle () {
    returnIndex = haystackIndex;
    needleIndex = 0;
    let haystackEnd = returnIndex + needleArray.length;

    while (haystackIndex < haystackEnd) {
      if (haystackArray[haystackIndex] === needleArray[needleIndex]) {
        if (needleIndex === needleArray.length - 1) {
          return true;
        }
        needleIndex++;
        haystackIndex++;
      } else {
        haystackIndex = returnIndex;
        needleIndex = 0;
        return false;
      }
    }
  }

  while (haystackIndex <= haystackArray.length - needleArray.length) {
    if (haystackArray[haystackIndex] === needleArray[needleIndex]) {
      if (hasNeedle()) {
        return returnIndex;
      }
    }
    haystackIndex++
  }
  return -1;
};


// Testing

// Example 1:
/* let haystack1 = "hello";
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

// Example:
var haystack = "aaa";
var needle = "aaaa";
// Needle length is longer than haystack length.
// Output: -1
console.log("output should be -1");
console.log(strStr(haystack, needle)); 

// Example:
var haystack = "mississippi";
var needle = "issip";
console.log(`Haystack: ${haystack}`);
console.log(`Needle: ${needle}`);
console.log("output should be 4");
console.log(strStr(haystack, needle));

// Example:
var haystack = "mississippi";
var needle = "issipi";
console.log(`Haystack: ${haystack}`);
console.log(`Needle: ${needle}`);
console.log("output should be -1");
console.log(strStr(haystack, needle));
*/

// Example:
var haystack = "mississippi";
var needle = "pi";
console.log(`Haystack: ${haystack}`);
console.log(`Needle: ${needle}`);
console.log("output should be 9");
console.log(strStr(haystack, needle));
