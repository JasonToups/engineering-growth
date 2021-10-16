// longestSubstring.js

// /**
//  * @param {string} s
//  * @return {number}
//  */
/* PROBLEM */
// Given a string, find the length of the longest substring without repeating characters.
/* PSEUDOCODE */
// Input - string of letters
// Output - length of longest substring
// Variables - Current Index = 0, Longest Substring [], Current Substring [].
// Loop through string, and send each letter to a substring, as long as the letter at the current index does not appear in the substring.
// // If the letter does appear in the current substring, save the current substring as longest substring as long as the length of the current substring is longer than the longest substring. 
// // Else save the current index letter to the current substring.
// After the loop completes, Return the joined longest substring

var lengthOfLongestSubstring = function (s) {
  let currentSubstring = [];
  let longestSubstring = [];
  for (let i = 0; i < s.length; i++) {
    if (!currentSubstring.includes(s[i])) {
      console.log(`Current letter ${s[i]} is not part of substring ${currentSubstring}`)
      currentSubstring.push(s[i]);
      if (i === s.length - 1) {
        longestSubstring = currentSubstring
      }
    } else {
      console.log(`Current letter ${s[i]} is part of substring ${currentSubstring}`)
      if (currentSubstring.length > longestSubstring.length) {
        console.log(`currentSubstring ${currentSubstring} is longer than longestSubstring ${longestSubstring}`)
        longestSubstring = currentSubstring;
      }
      console.log(`currentSubstring is being reset ${currentSubstring}`)
      currentSubstring = [];
      console.log(`adding current letter ${s[i]} back to currentSubstring`)
      currentSubstring.push(s[i]);
    }
  }
  longestSubstring
  return longestSubstring.join("");
  // return longestSubstring.join("").length;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
// output - "abc" with a length of 3
console.log(lengthOfLongestSubstring("bbbbb"))
// output - "b" with length of 1
console.log(lengthOfLongestSubstring("pwwkew"))
// output - "wke", with the length of 3.
console.log(lengthOfLongestSubstring(" "))
// output - "wke", with the length of 1.
console.log(lengthOfLongestSubstring("au"))
// output - "wke", with the length of 2.
console.log(lengthOfLongestSubstring("dvdf"))
// output - "wke", with the length of 3.

/*
// SOLUTION
var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
    let curr = 0;
    let hash = {};
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        if(hash[s[i]] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        max_len = Math.max(max_len, curr);
        hash[s[i]] = i; //save the index
    }
    return max_len;
};
The idea behind this code is to use hash maps to keep track of seen substrings.
Obviously if any string is less than two, the longest substring is equal to the length of that substring.
However, if not, then we would have to consider another approach.

Consider a string:
_ _ _ _ _ a _ _ _ _ _ f _ _ _ f _ _ _ a

Where _ means a distinct character from all the others.

As we transverse the string, we put a character into the hash table if it's not already in there where the key is the character and the value is the index. --> hash = {char: index}

If there character is already in the string, we have to update the index after we do the following procedures:

We have a curr that keeps track of the length of the substring that has not seen an already seen character. As we get to the second f, curr = 16. So, so far the max_len is going to be max(max_len = 0, curr = 16) [Since max_len has yet to be updated].

Now, we start our curr from the character after the first f. curr now becomes the distance between the first f and the second f, which is i - hash[s[i]]. We update the hash and continue.

The max_len is determined by the max of the current max_len and the curr value when it encounters a character already seen.

Finally, we have completely transversed the string and arrived at the max length of the substring that does not have any repeating characters.

Runtime: O(n)
Space Complexity: O(n) */