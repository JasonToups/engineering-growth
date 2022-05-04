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

function validateQuadrant(board) {

  function createQuadrantArray(board, row, column) {
    let array = [];
    let rowIndex = row;
    let columnIndex = column;
    while (rowIndex <= row + 3 && columnIndex <= column + 3) {
      if (columnIndex < (column + 3)) {
        // console.log(board[rowIndex][columnIndex]);
        array.push(board[rowIndex][columnIndex]);
        columnIndex++;
        // console.log(array)
        // console.log(`Adding 1 to column: ${columnIndex}`);
        // console.log(`Row Index: ${rowIndex}`);
      } else if (columnIndex === (column + 3) && rowIndex < (row + 2)) {
        rowIndex++;
        // console.log(`Adding 1 to row: ${rowIndex}`);
        columnIndex = column;
        // console.log(`Resetting columnIndex: ${columnIndex}`);
      } else {
        columnIndex++;
        // console.log(`Adding 1 to column: ${columnIndex}`);
      }
    }
    // console.log(`This is the final array`);
    // console.log(array);
    return array;
  }

  function generateQuadrant(board) {

    let row = 0, column = 0;
    while (row <= 6 && column <= 6) {
      if (!validateArray(createQuadrantArray(board, row, column))) {
        // console.log(false)
        return false
      } else if (column === 6) {
        // console.log('adding to row')
        // console.log(row)
        row += 3;
        // console.log(row)
        // console.log('resetting column')
        // console.log(column)
        column = 0
        // console.log(column)
        // console.log(`row: ${row} column ${column}`)
      } else {
        // console.log('adding to column')
        // console.log(column)
        column += 3;
        // console.log(column)
        // console.log(`row: ${row} column ${column}`)
      }
    }
    return true
  }

  if (!generateQuadrant(board)) {
    return false;
  } else {
    return true
  };
}

const isValidSudoku = function (board) {
  let index = 0;
  while (index < board.length) {
    if (!validateRow(board, index)) {
      // console.log('returning false')
      return false;
    } else if (!validateColumn(board, index)) {
      // console.log('returning false')
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

/* var example = [
  [".",".",".",".",".",".","5",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  ["9","3",".",".","2",".","4",".","."],
  [".",".","7",".",".",".","3",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".","3","4",".",".",".","."],
  [".",".",".",".",".","3",".",".","."],
  [".",".",".",".",".","5","2",".","."]
]
// BUG this should return false when the row === 6 && the column === 3.
console.log(isValidSudoku(example));
console.log("Output: false") */

// Input:
var example = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
console.log(isValidSudoku(example));
console.log("Output: true")
// Example 2:
/* var example = [
  ['8', '3', '.', '.', '7', '3', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
console.log(isValidSudoku(example));
console.log("Output: false") */
/* var example = [
  ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
  ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
];
console.log(isValidSudoku(example));
console.log("Output: false") */

/* var example = [
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
console.log("Output: false") */
