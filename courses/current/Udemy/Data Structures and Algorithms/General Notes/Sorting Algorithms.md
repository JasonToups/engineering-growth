# Sorting Algorithms

[Data visualizations](https://www.toptal.com/developers/sorting-algorithms) for various sorting algorithms.

# Bubble Sort

In-place sorting algorithm.

Bubble sort checks each index of a numerical array, where you compare the current index to the next index and swap places if the current index is larger than the second.

## Outer Loop

Goes through each index of the array.

Set a flag to false, to keep track if the inner loop runs.

## Inner Loop

For each index of the array, we must loop through the whole array, minus the length of the index.

At each index, compare the current index to the next one.

If the current one is greater than the next one, swap the values and set the flag to true.

```jsx
let array = [1, 7, 4, 6, 3, 2]
for (let j = 0; j < array.length; j++){
	let flag = false;
	for (let i = 0; i < array.length - i; i++){
		if (array[i] > array[i + 1]){
			flag = true
			swapA = array[i];
			swapB = array[i + 1];
			array[i] = swapB;
			array[i+1] = swapA;
	}
	if (flag) break
}
console.log(array)
```

# Merge Sort

Not an in-place sorting algorithm.

Take an array of numbers, and split it into even numbers of arrays, until you are comparing single digits at the bottom of the array. 

Sort the digits at the bottom of the array, then merge the sorted numbers into an array up the tree, and compare the two merged arrays.

When those arrays are sorted, then you merge them together, and go up the tree.

## Videos

[Merge Sort Algorithm](https://www.youtube.com/watch?v=TzeBrDU-JaY) -  1.6M Views ~18mins

[Algorithms: Merge Sort](https://www.youtube.com/watch?v=7LN9z140U90) - 350k Views - HackerRank ~9mins

[https://www.youtube.com/watch?v=Cq7SMsQBEUw](https://www.youtube.com/watch?v=Cq7SMsQBEUw)

```jsx
Fix this code, this isn't even close.

let l = [1,2,5,9]
let r = [3,6,7,8]
let a = []
let rIndex = 0

for (let i = 0; i < l.length + r.length; i++){
	if (l[i] > r[rIndex]){
		a.push(r[rIndex]);
		rIndex++
	} else {
		a.push(l[i]);
	}
}
console.log(a)
```