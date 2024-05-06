# Quick Sort

## Notes for Updating this guide

I'm having some issues with this right now. The instructions written and the videos I've seen have some contradicting procedures. 

I would like to take the last element as the pivot, then increment the two pointers individually, and name them smaller & larger. The smaller & larger values will swap if the larger value is not larger than the pivot.

## Guide

It's one of the most used and popular algorithms in any programming language. 

In Javascript, sort() will 'automatically' sort an array. It's not really automatic, since JS is doing the heavy lifting. It's actually running a quick sort algorithm, the same kind of quick sort that may be asked to demonstrate at an engineering interview.

Quick sort follows the **Divide & Conquer** algorithm, since it is dividing elements into smaller parts based on a condition and then performing the sort on those smaller parts. It's dividing the data set, and then sorting the divided smaller parts of the set. In this way, it **works well for large datasets**.

## Outline

1. Pivot Element - The pivot element is selected to do the comparison. 
2. Compare - All elements in the array are compared to the Pivot Element, and arranged in a way that elements that are less then the Pivot Element are moved to the left, and elements that are larger than the Pivot Element are moved to the right.
3. Repeat - Perform the same comparison to the left and right of the Pivot Element.

## How it Works

1. Find the Pivot Element in the array.  It's best to pick the middle element, since it will make the sort perform more efficiently.
2. Create two Pointers. The Smaller Pointer will be the first item in the array, and the Larger Pointer will be the last item in the array.
3. The Smaller & Larger Pointers will evaluate the current elements they are pointing to with the Pivot Element.
    1. While the Smaller Pointer is less than the Pivot Value, the Smaller Pointer will move forward one place to the right. The Pointer will continue to move until the Smaller Pointer Value is greater than or equal to the Pivot Value.
    2. While the Larger Pointer is greater than the Pivot Value, the Larger Pointer will move one space to the left. The Pointer will continue to move until the Larger Pointer Value is less than or equal to the Pivot Value.
4. A swap occurs during the following conditions:
    1. If the Left Pointer is greater than the Pivot Value

## Notes on JS

Swapping variables by applying destructuring assignment [a, b] = [b, a]

## Links

### Articles

Article - [Quicksort in JavaScript](https://www.guru99.com/quicksort-in-javascript.html)

Medium - [A Quick Explanation of Quick Sort](https://medium.com/karuna-sehgal/a-quick-explanation-of-quick-sort-7d8e2563629b)

### Videos

[Quicksort: Partitioning an Array](https://www.youtube.com/watch?v=MZaf_9IZCrc) - Cups

[Algorithms Quicksort](https://www.youtube.com/watch?v=SLauY6PpjW4) - Gayle McDowell of Cracking the Coding Interview

[Sorts 8 Quick Sort](https://youtu.be/ZHVk2blR45Q?t=227) - Choosing the Pivot Point