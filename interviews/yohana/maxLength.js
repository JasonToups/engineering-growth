// Suppose we have an array of numbers, and we need to find all of the combinations which `sum` to 2020.
// 
// // Example array, but assume this could be thousands of numbers long.
// // [721, 979, 366, 299, 675, 1456, 1010, 1010,  1421,  99, 500]
// 
// // i - Find all sums to 2020, assuming max length of 2
// // ii - Max length 3
// 
// 
const input = [1721, 979, 366,  99, 299, 675, 500, 1456, 1010, 1010,  1421 ]

// input - array of numbers
// output - array of numbers that sum to 2020

// save a return array of an array of numbers that sum to 2020

// Loop though the numbers 

// // at each index add each number together to determine if they sum to 2030, and go through the remainder of the array

// // to make this more efficient, only add the remaining numbers from the current index, since the previous ones would already have been added.

function sum (input, maxLength, target) {
  let returnArray = [];
  console.log(typeof(returnArray))
  for (let x = 0; x < input.length; x++){
    for (let y = x + 1; y < input.length; y++ ) {
      // we need a third loop to check for the remainder of the sums, with a separate third pointer
      for (let z = y + 1; z < input.length; z++ ) {
        if (input[x] + input[y] + input[z] === target){
      //   // this is for three nums to sum
        // console.log("we got one");
        // console.log(input[x]);
        // console.log(input[y]);
        returnArray.push([input[x],input[y], input[z]]);
      } else if (input[x] + input[y] === target){
        // console.log("we got one");
        // console.log(input[x]);
        // console.log(input[y]);
        returnArray.push([input[x],input[y]]);
        }
      }
    }
  }
  console.log(returnArray)
  return returnArray
}

sum(input, 3, 2020)