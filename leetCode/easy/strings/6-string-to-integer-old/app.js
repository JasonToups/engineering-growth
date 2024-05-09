/*  String to Integer (atoi)

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. 

Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

    Only the space character ' ' is considered a whitespace character.
    Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. If the numerical value is out of the range of representable values, 2^31 − 1 or −2^31 is returned.

Constraints:

    0 <= s.length <= 200
    s consists of English letters (lower-case and upper-case), digits, ' ', '+', '-' and '.'.

 */

 /**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  if (!s.length) return 0;
  let answer = "";
  let sign = null;
  let isNegative = false;
  
  for (let i = 0; i < s.length; i++) {
    // get the ASCII code for the string index
    let code = s[i].charCodeAt();
    
    // check for negative sign 45, a plus sign 43, a space 32 or within range between 48 - 57

    // TODO BUG - This if statement needs to be broke out into 2 separate ones. 
    // One for pre-building answer
    // Send for building answer
    if (code === 45 || code === 43 || code === 32 || (code >= 48 && code <= 57)) {
        if (code === 45) {
          if (sign === null && s.length > 1 && answer.length === 0) {
            isNegative = true;
            sign = i;
          } else {
            return 0
          }
          // If code === 45 then the answer will be negative
        } else if (code === 43) {
          if (sign === null && s.length > 1 && answer.length === 0) {
            sign = i;
          } else {
            return 0
          }
        } else if (code >= 48 && code <= 57) {
          // if s[i] is a number between 0-9, concatinate the string answer variable
          answer = answer.concat(s[i])
          // console.log(answer)
          ;
        }
    }
    else if (answer.length >= 1) {
      break
    }
    else if (answer.length < 1){
      return 0
    }
  }

  // if the isNegative flag is true, set answer to the negative value of the integer.
  if (isNegative) {
    answer = parseInt(-answer)
  } else {
    if (answer.length > 0) {
      answer = parseInt(answer)
    } else {
      return 0
    }
  }

  // check for value boundaries outside of the 2^31 range
  if (answer > 2147483647) {
    return 2147483647
  } else if (answer < -2147483647){
    return -2147483648
  } else {
    return answer
  }
};

 /* Test Cases */
//  Example 1:
let str1 = "42"
console.log("example 1 should be 42")
console.log(myAtoi(str1))
// Output: 42
// PASSES TESTS

// Example 2:
let str2 = "   -42"
console.log(str2)
console.log("example 2 should be -42")
console.log(myAtoi(str2), typeof(myAtoi(str2)))
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign. Then take as many numerical digits as possible, which gets 42.
// PASSES TESTS

// Example 3:
let str3 = "4193 with words"
console.log("example 3 should be 4193")
console.log(myAtoi(str3))
// Output: 4193
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
// PASSES TESTS

// Example 4:
let str4 = "words and 987"
console.log("example 4 should be 0")
console.log(myAtoi(str4))
// Output: 0
// Explanation: The first non-whitespace character is 'w', which is not a numerical digit or a +/- sign. Therefore no valid conversion could be performed.

// Example 5:
let str5 = "-91283472332"
console.log("example 5 should be -2147483648")
console.log(myAtoi(str5))
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer. Thefore INT_MIN (−231) is returned.
// PASSES TESTS

//  Example 6:
let str6 = "3.14159"
// Output:
console.log("example 6 should be 3")
console.log(myAtoi(str6))

//  Example 7:
let str7 = "+-12"
// Output:
console.log("example 7 should be 0")
console.log(myAtoi(str7))

//  Example 8:
let str8 = "00000-42a1234"
// Output:
console.log("example 8 should be 0")
console.log(myAtoi(str8))

// Example 9:
let str9 = " "
// Output:
console.log(str9)
console.log("example 9 should be 0")
console.log(myAtoi(str9))

// Example 10:
let str10 = "   +0 123"
// Output:
console.log(str10)
console.log("example 10 should be 0")
console.log(myAtoi(str10))


// Marco's Solution
/* 
const myAtoi = (str) => {
  // If empty string, return 0
  if (!str.length) return 0;
  // Initiate answer variable
  let ans = '';
  // Iterate through str to check for a "+", "-" or "integer"
  for (let i = 0; i < str.length; i++) {
    // Check ASCII code of each char of str
    let code = str[i].charCodeAt();
    // If we have not started putting ans together...
    if (ans.length < 1) {
      // if it is one of allowed chars, add it to ans
      if (code === 43 || code === 45 || (57 >= code && code >= 48)) {
        ans = ans.concat(str[i]);
      } else if (code !== 32) {
        return 0;
      }
      // but if the first char we hit is none of the allowed chars, return 0
    } else if (57 >= code && code >= 48) {
      // if we HAVE started building ans then only accept integers.
      ans = ans.concat(str[i]);
    } else {
      break;
    }
  }
  // If the loop is over and ans is still empty, return 0;
  if (!ans.length) return 0;
  // Convert ans to an integer
  ans = parseInt(ans);
  // Check if ans is within range
  if (ans > -2147483648 && ans < 2147483648) {
    return ans;
  } else if (ans <= -2147483648) return -2147483648;
  else if (ans >= 2147483648) return 2147483647;
  //if you get NaN or something weird
  return 0;
};
*/