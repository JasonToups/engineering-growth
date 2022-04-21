/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Link to article explaining how to do this.
https://dev.to/alisabaj/rotating-a-matrix-90-degrees-4a49

Constraints:

    matrix.length == n
    matrix[i].length == n
    1 <= n <= 20
    -1000 <= matrix[i][j] <= 1000

 */

/* PSEUDOCODE 
 Swap elements in-place.
 Save the first row to a row variable.
 Save the first column to a column variable.
 Loop through the reverse column and place those values into the first row of the matrix.
 Unshift the last row

Looping through the final index of the matrix
Grabbing each of the values from the final index
Placing them into the values of the first index of each array.

Create an array.
[7, 4, 1, 8, 5, 2, 9, 6, 3]

 */

 var rotate = function(matrix) {
  let hold = [];
  const matrixLength = matrix.length;
  
  for (var y = 0; y <= matrixLength - 1; y++) {

    for (var x = matrixLength - 1; x >= 0; x--) {
      console.log(matrix[x][y]);
      hold.push(matrix[x][y])
    }
    matrix.push(hold)
    hold = [];
    console.log(hold)
  }
  matrix.splice(0, matrixLength)
  console.log(matrix);
  return matrix;
};

//  Example 1:

// Input:
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotate(matrix));

var solution = [
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
console.log(solution)

// Example 2:

var matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
// console.log(rotate(matrix));

/* Output: [
  [15,13,2,5],
  [14,3,4,1],
  [12,6,8,9],
  [16,7,10,11]
] */

// Example 3:

var matrix = [[1]];
// console.log(rotate(matrix));

// Output: [[1]]

// Example 4:

var matrix = [
  [1, 2],
  [3, 4],
];
// console.log(rotate(matrix));

/* Output: [
  [3,1],
  [4,2]
] */
