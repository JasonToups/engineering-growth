/* 
Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Constraints:

  s consists only of printable ASCII characters.

  */

/**
 * @param {string} s
 * @return {boolean}
 **/

/* Not Performant */
var isPalindrome = function(s) {
  var string = s.toLowerCase().replace(/[.,\/'"#!?\[\]@$%\^&\*;:{}=\-_`~() ]/g,"");
  var answer = true;
  console.log(string)
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]){
      answer = false
    }
  }
  return answer
};

/* Could work this into an ASCII Code lookup 
string[i].charCodeAt()

Place that into an if else statment looking for values between 65-90 OR 97-122

That would remove the double looping for both toLowerCase and replace methods.

http://www.asciitable.com/
*/
// var isPalindrome = function(s) {
//   var string = s.toLowerCase().replace(/[.,\/'"#!?\[\]@$%\^&\*;:{}=\-_`~() ]/g,"");
//   var answer = true;
//   console.log(string)
//   for (let i = 0; i < string.length / 2; i++) {
//     if (string[i] !== string[string.length - i - 1]){
//       answer = false
//     }
//   }
//   return answer
// };

// Example 1:

var Input1 = "A man, a plan, a canal: Panama"
// console.log(isPalindrome(Input1))
// Output: true

// Example 2:

var Input2 = "race a car"
// console.log(isPalindrome(Input2))
// Output: false

var Input3 = "Marge, let's \"[went].\" I await {news} telegram."
console.log(isPalindrome(Input3)) 



