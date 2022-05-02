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
  let firstIndex = 0;

  return firstIndex;
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