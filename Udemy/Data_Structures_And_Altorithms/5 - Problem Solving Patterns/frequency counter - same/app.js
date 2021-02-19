/* 
Same

Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

*/

// This is a nested loop approach, which is O(n2), which is not efficient enough.
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
      return false;
    }
    //this removes the matching element from the second array
    arr2.splice(correctIndex, 1)
  }
  return true
}

console.log(same([1,2,3,2], [9,1,4,4]))

/* REFACTOR */
// Time complexity is O(n) linear time
// Use an object to break down an array, and then compare the objects.
// Two separate loops are better than nested loops for time complexity.

function same2(arr1, arr2){
  if(arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val]) || 0 + 1
  }
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val]) || 0 + 1
  }
  for(let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(same2([1,2,3,2], [9,1,4,4]))