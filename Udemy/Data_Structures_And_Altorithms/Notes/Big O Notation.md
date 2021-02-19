# Big O Notation

Why do we need Big O notation?

When we have two possible solutions to a problem, Big O notation can be used to **compare multiple solutions** to the same problem to evaluate the space and time complexity of the solutions.

**Big O** allows us to *express the time and space complexity* with a **numeric notation**.

Big O provides a precise vocabulary to talk about how our code performs.

It also allows us to discuss trade-offs between different approaches. Some code may be more efficient working through large data sets, and another approach may be better with smaller data sets. This helps us debug code and identify pain points in the code.

Big O frequently comes up in technical interviews. Understanding how to discuss the time and space complexity of your code, will support your approach to the coding challenges.

## Example

Write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

```jsx
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}
```

```jsx
function addUpTo(n) {
	return n * (n + 1) / 2;
}
```

Which solution is faster?

We can find out how much time something takes to run in JS with performance.now()

```jsx
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
```

The 1st solution is much slower than the second one. The Console output for the time complexity of the first solution:

```jsx
Time Elapsed: 0.9921649999996589 seconds.
```

Compared to the second solution:

```jsx
Time Elapsed: 0.000024999999382998793 seconds.
```

## The Problem with Time

Different machines will record different times for the code above. This all depends on hardware, and open apps running, etc. Also, when running the code on the same machine, there will be different times every time you run them. There are many factors that affect how long it takes for an algorithm to run.

## Counting the # of Operations

Since time is variable when it comes to running software, creating a counter for the number of operations for an algorithm, is a quantifiable way to communicate the complexity of an algorithm that remains constant, regardless when or how an algorithm runs.

In both of the algorithms above, you can count the comparison, computational, and assignment operators to come up with a total.

- Solution 1 - 6
- Solution 2 - 3

The important takeaway is this: Depending what is passed into the function, the number of operations grows proportionally with the number.

# Big O - Time Complexity

It's a notation that allows us to formally discuss how the runtime of an algorithm grows as the inputs grow.

Since this function will always be 3 operations, as the number that is passed as an argument into the function may increase, the operations will remain constant. 

```jsx
function addUpTo(n) {
	return n * (n + 1) / 2;
}
```

So the Big O notation of this one is:  **O(1)**

Since this function increases the amount of operations over time due to the number that's passed as an argument into the function, the time complexity grows as the number increases.

```jsx
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}
```

So the Big O notation of this one conveys the fact that the number of operations is bounded by a multiple of n as, **O(n)**

This next function has a loop within a loop. So for each iteration of the outer loop, the inner loop will run the same amount of times as whatever is passed as an argument into the function.

```jsx
function printAllPairs(n) {
	for (var i = 0; i < n; i++){
		for (var j = 0; j < n; j++){
			console.log(i, j);
		}
	}
}
```

The outer loop is **O(n).**

The inner loop is **O(n).**

Which makes the whole function come to **O(n^2)** | *Big O of n squared.*

## Big O Shorthands

1. Arithmetic operations are constant.
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant.
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

# Big O - Space Complexity

We can use big O notation to communicate the space complexity of an algorithm.

Sometimes you'll hear the term **auxiliary space complexity** to refer to the space required by the algorithm, not including space taken up by the inputs.

## Rules of Thumb

1. Most primitives (booleans, numbers undefined, null) are constant space.
2. Strings require O(n) space (where n is the string length).
3. Reference types are generally O(n), where in is the length (for arrays) or the number of keys (for objects)

# Logarithms

Logarithms are the inverse of exponents. 

The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one**.

## Logarithm Time Complexity

Logarithmic time complexity is great, it can be more efficient. 

## Why does this matter?

Certain searching algorithms have logarithmic time complexity.

Efficient sorting algorithms involve logarithms.

Recursion sometimes involves logarithmic space complexity.

# The Big O of Objects

- Objects are used when you don't need order.
- Also when you need fast access / insertion and removal.

## Time Complexity of Objects

- Insertion    - O(1)
- Removal    - O(1)
- Searching - O(n) - searching for a key value pair
- Access      - O (1) - accessing a key value pair directly

## Big O of Object Methods

- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
- hasOwnProperty - O(1)

# The Big O of Arrays

Arrays are ordered lists.

Each entry in an array has an index.

- Arrays are used when you need order.
- When you need fast access / insertion and removal (sort of...)

## Time Complexity of Arrays

- Insertion - it depends
    - O(1) - If you add an item to the end, you are simply adding a new index with a new element
    - O(n) - If you add an item to the beginning, then you are reassigning a new index to each element in the array
- Removal - it depends
    - O(1) - If you remove an item from the end.
    - O(n) - If you remove an item from the beginning, same time complexity applies as inserting an item to the beginning.
- Searching - O(n)
- Access - O(1)

## Big O of Array Methods

- push - O(1)
- pop - O(1)
- shift - O(n)
- unshift - O(n)
- concat - O(n)
- slice - O(n)
- splice - O(n)
- sort - O(n * log n)
- forEach/map/filter/reduce/etc. - O(n)