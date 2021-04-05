/* 
Binary Tree Larger

Suppost you are given a binary tree represented as an array. 

For example, [3, 6, 2, 9, -1, 10] represents the following binary tree(where -1 is a non-existent node).

Write a function that determines whether the left or right branch of the tree is larger. The size of each branch is the sum of the node values. The function should return the string "Right" if the right side is larger and "Left" if the left side is larger. 

If the tree has 0 nodes, or if the size of the branches are equal, return the empty string.

*/

const solution = (array) => {
  if (!array) return "";
  
  const sum = (array, index) => {
    if (index <= array.length) {
      if (array[index - 1] === -1) return 0;
      return array[index - 1] + sum(array, index * 2) + sum(array, index * 2 + 1);
    }
    return 0;
  }
  const left = sum(array, 2);
  const right = sum(array, 3);
  return (left == right) ? "" : (left > right ? "Left" : "Right"); 
}

const array1 = [3, 6, 2, 9, -1, 10];
console.log(solution(array1));

const array2 = [];
console.log(solution(array2));

const array3 = [1, 3, 3];
console.log(solution(array3));