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

/* 
Input string
Output boolean

PLAN
Done - Process the String Input
Take the string input & remove all spaces & punctuation, then convert all letters to lowercase.
Convert the string to an array

Done - Check for Palendrome
Loop through the processedArray.
The index should only reach 1/2 of the length of the processedArray.
At each loop, check if the processedArray[index] === processedArray[-index],
if it doesn't then return false

After the loop completes, then return true.

 */

var isPalindrome = function(s) {
  let processedArray = [];
  let index = 0;

  function containsNumOrLetter(str) {
    return /[0-90-9a-zA-Z]/.test(str);
  }

  function processString (string) {
    index = 0;
    processedArray = string.split("");
    while (index < processedArray.length) {
      if (containsNumOrLetter(processedArray[index])) {
        processedArray[index] = processedArray[index].toLowerCase();
      } else {
        processedArray.splice(index, 1);
        index--
      }
      index++
    }
  }

  function checkPalendrome(array){
    index = 0;
    
    while (index <= array.length / 2) {
      if (array[index] !== array[array.length - index - 1]) {
        console.log(`Positive Index ${index} ${array[index]}`)
        console.log(`Negative Index ${array.length - index - 1} ${array[array.length - index - 1]}`)
        return false
      }
      index++
    }
    return true
  }

  processString(s)

  return checkPalendrome(processedArray)
};

// Example 1:

var input = "A man, a plan, a canal: Panama"
// console.log(isPalindrome(input))
// console.log("Output: true")

// Example 2:

var input = "race a car"
// console.log(isPalindrome(input))
// console.log("Output: false")

var input = "Marge, let's \"[went].\" I await {news} telegram."
// console.log(isPalindrome(input)) 
// console.log("Output: true")

var input = "0P"
console.log(isPalindrome(input)) 
console.log("Output: false")

var input = "a"
console.log(isPalindrome(input)) 
console.log("Output: true")


