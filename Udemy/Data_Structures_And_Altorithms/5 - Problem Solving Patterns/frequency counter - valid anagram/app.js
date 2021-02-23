/* 
Valid Anagram

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

*/

function validAnagram(str1, str2) {
  // check if the strings are the same length, if they are not, then return false
  if (str1.length !== str2.length) {
    return false
  }

  // create one empty objects to count the number of times a letter appears in the string.
  let frequencyCounter = {}

  // loop through the string and add the frequency of each letter to the objects
  for (let i in str1) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    frequencyCounter[letter] ? frequencyCounter[letter] += 1 : frequencyCounter[letter] = 1;
  }

  console.log(frequencyCounter)
  // console.log(frequencyCounter2)

}


// TESTING
console.log(validAnagram('', '')) //true
console.log(validAnagram('aaz', 'zza')) //false
console.log(validAnagram('anagram', 'nagaram')) //true
// console.log(validAnagram('rat', 'car')) //false
// console.log(validAnagram('awesome', 'awesom')) //false
// console.log(validAnagram('qwerty', 'qeywrt')) //true
// console.log(validAnagram('texttwisttime', 'timetwisttext')) //true














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

// console.log(same2([1,2,3,2], [9,1,4,4]))