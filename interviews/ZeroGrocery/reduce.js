/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/

// Write the Array reduce method.  The method
// should be immutable, and not modify the collection.
// reduce :: (function, initialValue, collection) => result
// reduce((acc, n) => acc + n, 0, [1,2,3,4]) => 10

const arr = [1,2,3,4]

// functions to pass into reduce
const addFn = (a,b) => a + b
const subFn = (a,b) => a - b

function reduce (func, initialValue, collection)  {
  // set the initialValue argument to the reduceReturn variable
  let reduceReturn = initialValue;
  // loop through the collection
  for (let x = 0; x < collection.length; x++) {
    // at each index, run the func, passing in the current index value, and the initial value
    reduceReturn = func(reduceReturn, collection[x]);
    // Store the sum in a return variable, and add the result to the return variable.
  }
  console.log(reduceReturn)
  return reduceReturn
}

// PASS
reduce(addFn, 0, [1,2,3,4] )
// 10

// PASS
reduce(addFn, 0, [1,2,3,4,5] )
// 15

// Pass
reduce(subFn, 0, [1,2,3,4,5] )
// -15