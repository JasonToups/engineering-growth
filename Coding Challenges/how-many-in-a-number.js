// """
// Given a number, write a function that can tell how many occurrences there are of any digit in that number without converting the number to a string or array.

// Example:
//  Given 1234123
//  Count the number of 1's in the number
//  Answer: 2
// """

// Inputs
// two numbers
// var given
// var target
// var count

// Outputs
// count of number
// return num

// Go through the given number, and divide it by ten, then evaluate the current integer with the target. 
// In the loop, multiply decimal by 10 and store it.
// If they are equal, then add one to count

// Return count.

const countNum = (given, target) => {
  let count = 0;
  let givenOriginal = given;
  while (parseInt(given) > 0) {
    if (parseInt(given%10) === target){
      count++
    }
    given = given / 10
  }
  return `The count of ${target} in ${givenOriginal} is ${count}`
}

console.log(countNum(1234123, 1))