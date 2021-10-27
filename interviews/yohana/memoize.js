// create a memoize function that caches arguments and result

const add = (n1, n2) => {
  console.log('not cached');

  return n1 + n2;
};


/// ====
  
function memo(fn) {
  const cache = {};
  
  return function (...arguments) {
    console.log(arguments);
  }
}

const memoizedAdd = memo(add);

console.log(memoizedAdd(2, 3)); // first time should process
console.log(memoizedAdd(2, 3)); // second time should output cached result

// sum of two numbers
// we want to memoize the function


// memoization - 
// if I call a function add, with two and three, it should return 5.
// when you memoize add with two and three, it returns 5.

