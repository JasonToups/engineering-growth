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

/* 
PLAN
Convert string to array

Read in next the characters until the next non-digit character or the end of the input is reached.

Loop through array.
  Ignore all leading whitespace until a + or - sign or an integer is encountered.  

  If the current index is a + or -, then update the isNegative variable to reflect that.

  When the first integer is encountered, set the spliceStart variable to the current index.

  When the last consecutive integer is encountered, set the spliceEnd variable to the current index.

  return out of the loop by setting the integer to the parseInt(array.splice(spliceStart, spliceEnd));


Check if the integer falls outside of the integer range.
If the integer is outside of the range, then set the integer to either end of the range.

Return the integer
*/

var myAtoi = function(s) {
  let array = s.split("");
  let index = 0;
  let integer = 0;
  let integerBegins = false;
  let isNegative = false;
  let spliceStart = 0;
  let spliceEnd = 0;

  function outOfBounds(number) {
    if (number <= -(Math.pow(2,31))) {
      integer = -(Math.pow(2,31))
    } else if (number >= (Math.pow(2,31)) - 1){
      integer = (Math.pow(2,31)) - 1
    }
  }

  function firstChar () {
    while (index < array.length) {
      if (array[index] !== " "){
        return true;
      }
      index++;
    }
    return false;
  }

  function isNegativeChar () {
    if (array[index] === '-'){
      isNegative = true;
      index++
    } else if (array[index] === '+') {
      isNegative = false;
      index++
    }
  }

  if (s.length === 0) {
    console.log('length is 0')
    return 0;
  }

  firstChar()
  isNegativeChar()

  while (index < array.length) {
    if (integerBegins && isNaN(parseInt(array[index]))){
      spliceEnd = index - 1
    } else if (!integerBegins && isNaN(parseInt(array[index]))){
      integer = 0;
      return integer 
    } else if (!isNaN(parseInt(array[index])) && index === 0){
      integerBegins = true;
    } else if (!integerBegins && !isNaN(parseInt(array[index])) && spliceStart === 0) {
      spliceStart = index;
      integerBegins = true;
      if (index === array.length - 1){
        spliceEnd = index;
      }
    } else if (integerBegins && !isNaN(parseInt(array[index]))) {
      spliceEnd = index;
    }
    index++;
  }

  if (integerBegins) {
    integer = parseInt(array.slice(spliceStart, spliceEnd + 1).join(""));
  }
  
  if (isNegative) {
    integer = -integer;
  }

  outOfBounds(integer)

  return integer;
};

 /* Test Cases */
//  Example 1:
var str = "42"
// console.log("should be 42")
// console.log(myAtoi(str))
// console.log("Output: 42")

// Example 2:
var str = "   -42"
// console.log(str)
// console.log("example 2 should be -42")
// console.log(myAtoi(str))
// console.log("Output: -42")
// Explanation: The first non-whitespace character is '-', which is the minus sign. Then take as many numerical digits as possible, which gets 42.
// PASSES TESTS

// Example 3:
var str = "4193 with words"
// console.log(str)
// console.log("example 3 should be 4193")
// console.log(myAtoi(str))
// console.log("Output: 4193")
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
// PASSES TESTS

// Example 4:
var str = "words and 987"
// console.log("example 4 should be 0")
// console.log(myAtoi(str))
// console.log("Output: 0")
// Explanation: The first non-whitespace character is 'w', which is not a numerical digit or a +/- sign. Therefore no valid conversion could be performed.

// Example 5:
var str = "-91283472332"
// console.log("example 5 should be -2147483648")
// console.log(myAtoi(str))
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer. Thefore INT_MIN (−231) is returned.


var str = "+1"
// console.log(str)
// console.log("should be 1")
// console.log(myAtoi(str))

var str = "-5-"
console.log(str)
console.log("-5")
console.log(myAtoi(str))



//  Example 6:
var str = "3.14159"
// Output:
// console.log("example 6 should be 3")
// console.log(myAtoi(str))

//  Example 7:
var str = "+-12"
// Output:
// console.log("example 7 should be 0")
// console.log(myAtoi(str))

//  Example 8:
var str = "00000-42a1234"
// Output:
// console.log("example 8 should be 0")
// console.log(myAtoi(str))

// Example 9:
var str = " "
// Output:
// console.log(str)
// console.log("example 9 should be 0")
// console.log(myAtoi(str))

// Example 10:
var str = "   +0 123"
// Output:
// console.log(str)
// console.log("example 10 should be 0")
// console.log(myAtoi(str))


