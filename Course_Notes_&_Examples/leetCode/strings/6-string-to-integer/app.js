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
  let integer = 0;

  return integer;
};

 /* Test Cases */
//  Example 1:
var str = "42"
console.log("should be 42")
console.log(myAtoi(str), typeof(myAtoi(str)))
console.log("Output: 42")

// Example 2:
var str = "   -42"
console.log(str)
console.log("example 2 should be -42")
console.log(myAtoi(str), typeof(myAtoi(str)))
console.log("Output: -42")
// Explanation: The first non-whitespace character is '-', which is the minus sign. Then take as many numerical digits as possible, which gets 42.
// PASSES TESTS

// Example 3:
var str = "4193 with words"
console.log("example 3 should be 4193")
console.log(myAtoi(str), typeof(myAtoi(str)))
console.log("Output: 4193")
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
// PASSES TESTS

// Example 4:
var str = "words and 987"
console.log("example 4 should be 0")
console.log(myAtoi(str))
console.log("Output: 0")
// Explanation: The first non-whitespace character is 'w', which is not a numerical digit or a +/- sign. Therefore no valid conversion could be performed.

// Example 5:
var str = "-91283472332"
console.log("example 5 should be -2147483648")
console.log(myAtoi(str))
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer. Thefore INT_MIN (−231) is returned.
// PASSES TESTS

//  Example 6:
var str = "3.14159"
// Output:
console.log("example 6 should be 3")
console.log(myAtoi(str))

//  Example 7:
var str = "+-12"
// Output:
console.log("example 7 should be 0")
console.log(myAtoi(str))

//  Example 8:
var str = "00000-42a1234"
// Output:
console.log("example 8 should be 0")
console.log(myAtoi(str))

// Example 9:
var str = " "
// Output:
console.log(str)
console.log("example 9 should be 0")
console.log(myAtoi(str))

// Example 10:
var str = "   +0 123"
// Output:
console.log(str)
console.log("example 10 should be 0")
console.log(myAtoi(str))


