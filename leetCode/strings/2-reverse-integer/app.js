/* 
  Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Constraints:

    -2^31 <= x <= 2^31 - 1

    2147483648
    -2147483648
*/

var reverse = function(x) {
  const isNegative = x < 0;
  if (isNegative){
    x = x * -1
  }
  let answer = ((parseInt((x).toString().split('').reverse().join(''))));
  if(answer >= -2147483648 && answer <= 2147483648){
  	return isNegative ? answer * -1 : answer;
  }
  return 0;
};

/* // Example 1:

const input1 = 123
// Output: 321
reverse(input1)

// Example 2:

const input2 = -123
// Output: -321
reverse(input2)

// Example 3:

const input3 = 120
// Output: 21
reverse(input3)

// Example 4:

const input4 = 0
// Output: 0
reverse(input4)

// Example 5:

const input5 = 21474836489
// Output: 0
reverse(input5) */

// Example 6:

const input6 = 1534236469
// Output: 0
reverse(input6) 