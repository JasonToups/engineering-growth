/* Count and Say

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

    countAndSay(1) = "1"
    countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.

To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251":

Given a positive integer n, return the nth term of the count-and-say sequence.

Constraints:
  1 <= n <= 30

*/

var countAndSay = function(n) {
  // establishing the result variable
	let result = "1";
  
  // this while loop will run as many times as the argument number minus 1.
  while (n > 1) {
    let count = 1;
    let current = "";

    for (let i = 0; i < result.length; i++ ) {
      if (result[i] === result[i + 1]) {
        //add one to count
        console.log('adding one to count')
        count++
      } else {
        console.log('no more repeating numbers')
        // set the count and number to current
        current += `${count}${result[i]}`;
        // set count back to one
        count = 1;
      }
      
    }
    // subtract one from the number argument
    n--
    console.log(result);
    result = current;
  }
  console.log(`This is the result: ${result}`)
	return result;
};



// Example 1:
let n = 1
// console.log(countAndSay(n))
// Output: "1"
// Explanation: This is the base case.

// Example 1:
let n2 = 2
// console.log(countAndSay(n2))
// Output: "11"
// Explanation: This is the second case.

// Example 3:
let n3 = 4
// Output: "1211"
// console.log(countAndSay(n3))

// Example 5:
let n4 = 9
// Output: "1211"
console.log(countAndSay(n4))

// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"


// SOLUTION
// var countAndSay = function(n) {
//   // establishing the result variable
// 	let result = "1";
// 	while (n > 1) {

// 		let count = 1;
// 		let current = "";
// 		for (let i = 0; i < result.length; i++) {
// 			if (result[i] === result[i + 1]) {
// 				count++;
// 			} else {
// 				current += `${count}${result[i]}`;
// 				count = 1;
// 			}
// 		}
//     n--;
//     console.log(result)
// 		result = current;
// 	}
// 	return result;
// };


// Marco's Solution 1/2 working
// const countAndSay = (n, result = '1') => {
//   if(n <= 1) return result;
//   let current = '';
//   let count = 1;
//   for(let i=0; i< result.length; i++){
//     if (result[i] === result[i + 1]) {
//       count++;
//     } else {
//       current += `${count}${result[i]}`;
//       count = 1;
//     }
//   };
//   return countAndSay(n--, current);
// };