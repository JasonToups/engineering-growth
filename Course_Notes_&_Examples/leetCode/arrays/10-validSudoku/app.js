/* Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9. */

/*
 * @param {character[][]} board
 * @return {boolean}
 */

/* 
Plan
Create a function that validates the numbers in an array & returns true or false.


*/

// I believe this is working
function validateArray(array) {
  let nums = {
    1: 0, 
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  };
  let index = 0;
  while (index < array.length) {
    if (array[index] === ".") {
      index++;
    } else if (array[index] >= 0 || array[index] <= 9) {
      nums[`${array[index]}`]++;
      index++;
    } else {
      return false
    }
  }
  let numsValues = Object.values(nums).sort();
  index = numsValues.length;
  while (index >= 0) {
    if (numsValues[index] >= 2){
      return false;
    } else {
      // console.log('checking previous value')
      index--
    }
  }
  return true
}

// I believe this is working
function validateRow(board, row) {
  if (!validateArray(board[row])) {
    return false
  } else {
    return true
  }
}

// Make sure this is working)
function validateColumn(board, column) {
  index = 0;
  array = []
  // make array to validate
  while (index < board.length) {
    array.push(board[index][column])
    index++
  }
  if (!validateArray(array)) {
    return false
  } else {
    return true
  }
}

// TODO Need to make an array out of a column, and then pass that into validateArray()

function validateQuadrant(board) {
  array = [];

  function createQuadrantArray(board, row, column) {
    let array = [];
    let rowIndex = row;
    let columnIndex = column;
    while (rowIndex <= row + 3 && columnIndex <= column + 3) {
      if (columnIndex < (column + 3)) {
        console.log(board[rowIndex][columnIndex]);
        array.push(board[rowIndex][columnIndex]);
        columnIndex++;
        console.log(array)
        console.log(`Adding 1 to column: ${columnIndex}`);
        console.log(`Row Index: ${rowIndex}`);
      } else if (columnIndex === (column + 3) && rowIndex < (row + 2)) {
        rowIndex++;
        console.log(`Adding 1 to row: ${rowIndex}`);
        columnIndex = 0;
        console.log(`Resetting columnIndex: ${columnIndex}`);
      } else {
        columnIndex++;
        console.log(`Adding 1 to column: ${columnIndex}`);
      }
    }
    console.log(array);
    return array;
  }

  function generateQuadrant(board) {
    // TODO generate the coordinates for the array
    // TODO run validateArray on the functions
    createQuadrantArray(board, 0, 0);
  }

  generateQuadrant(board);

  if (!board) {
    return false
  } else {
    return true
  }
}

const isValidSudoku = function (board) {
  let index = 0;
  while (index < board.length) {
    if (!validateRow(board, index)) {
      console.log('returning false')
      return false;
    } else if (!validateColumn(board, index)) {
      console.log('returning false')
      return false;
    } else {
      // console.log('checking next row')
      index++
    }
  }
  if (!validateQuadrant(board)) {
    return false;
  };
  return true;
};
// Input:
// var example = [
//   ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ];
// console.log(isValidSudoku(example));
// console.log("Output: true")
// // Example 2:
// let example2 = [
//   ['8', '3', '.', '.', '7', '3', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ];
// // Output: false
// console.log(isValidSudoku(example2));
// let example3 = [
//   ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
//   ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
//   ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
//   ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
// ];
// // Output: false
// console.log(isValidSudoku(example3));

var example = [
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
];
console.log(isValidSudoku(example));
console.log("Output: false")
