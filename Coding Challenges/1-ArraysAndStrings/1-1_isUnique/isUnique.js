/* 
1.1 isUnique:
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? */

// Two Loop Solution
str = "abcdb"
const isUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i === j) {
        continue
      } else {
        if (str[i] === str[j]) {
          console.log(i, j)
          return false
        }
      }
    }
  }
  return true
}

console.log(isUnique(str));

// Sorting the string with the Sort Method
const isUniqueSortMethod = (str) => {
  let arr = str.split("").sort();
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return false
    }
  }
  return true
}

let str2 = "abfcdbe"
console.log(isUniqueSortMethod(str2)) // false
let str3 = "abfcde"
console.log(isUniqueSortMethod(str3)) // true

/* Quicksort Function by scratch */
function quickSort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {

    let left = [];
    let right = [];
    let newArray = [];
    let pivot = origArray.pop();
    console.log(`The pivot is: ${pivot} and it's being removed from the original array.`)
    var length = origArray.length;

    for (let i = 0; i < length; i++) {
      console.log(`The current index is: ${origArray[i]}
       in [${origArray}]`)
      if (origArray[i] <= pivot) {
        console.log(`The current index ${origArray[i]} is less than or equal to the pivot ${pivot}. 
        So it's being sent to the left array [${left}]`)
        left.push(origArray[i]);

      } else {
        console.log(`The current index ${origArray[i]} is greater than the pivot ${pivot}. 
        So it's being sent to the right array [${right}]`)
        right.push(origArray[i]);
      }
      console.log(`left array: [${left}]`);
      console.log(`right array: [${right}]`);
    }
    console.log(`The sorting of the left array [${left}] and right array [${right}] have been completed.
    They will be combined into a new array, with the pivot ${pivot} placed in the middle.`)
    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}

var arr = [3, 0, 2, 5, -1, 4, 1];

console.log(`
********************************
ORIGINAL ARRAY: ${arr}`);
console.log(`SORTED ARRAY: ${quickSort(arr)}
********************************`);

// Using the quickSort function within the solution
const isUniqueSortFunction = (str) => {
  let arr = quickSort(str.split(""));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return false
    }
  }
  return true
}

let str5 = "abfcde"
console.log(isUniqueSortFunction(str5)) // true
let str6 = "abfcdbe"
console.log(isUniqueSortFunction(str6)) // false