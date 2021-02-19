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
 */

//  WORKING
const rotateImage = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      const temp = matrix[i][j];
      console.log(matrix[j][i]);
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let k = 0; k < matrix.length; k++) {
    let row = matrix[k].reverse();
    matrix[k] = row;
  }

  console.log(matrix);
};

//  Example 1:

// Input:
matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotateImage(matrix1);

/* Output: [
  [7,4,1],
  [8,5,2],
  [9,6,3]] 
  */

// Example 2:

Input: matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
// rotateImage(matrix2);

/* Output: [
  [15,13,2,5],
  [14,3,4,1],
  [12,6,8,9],
  [16,7,10,11]
] */

// Example 3:

Input: matrix3 = [[1]];
// rotateImage(matrix3);

// Output: [[1]]

// Example 4:

Input: matrix4 = [
  [1, 2],
  [3, 4],
];
// rotateImage(matrix4);

/* Output: [
  [3,1],
  [4,2]
] */
