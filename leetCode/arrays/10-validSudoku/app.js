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

const isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    if (!checkNums(board[i])) {
      // console.log('not valid sudoku');
      return false;
    }
  }
  // checking columns
  for (let i = 0; i < 9; i++) {
    const column = [];
    // at each column index of the board row, push the index of the next row to the column array
    for (let j = 0; j < board[i].length; j++) {
      column.push(board[j][i]);
      // once you reach the end of the column, move to the next column index.
    }
    // validate the column array
    if (!checkNums(column)) {
      // console.log('not valid sudoku');
      return false;
    }
  }

  // checking quadrant
  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      // console.log(x, y);
      if (!checkNums(buildQuadrant(x, y, board))) {
        return false;
      }
    }
  }

  return true;
};

const buildQuadrant = (x, y, board) => {
  let quadrant = [];
  // let startingBlock = [x,y];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      quadrant.push(board[i + x][j + y]);
    }
  }
  //WORKING
  // for (let i = x; i < x + 3; i++) {
  //   for (let j = y; j < y + 3; j++) {
  //     quadrant.push(board[i][j]);
  //   }
  // }
  console.log(quadrant);
  return quadrant;
};

const checkNums = array => {
  const sorted = [...array].sort();
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] != '.') {
      sorted[i] = parseInt(sorted[i]);
      // check next index for a greater value
      if (sorted[i] >= sorted[i + 1]) {
        return false;
      }
    }
  }
  return true;
};
// Input:
let example1 = [
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
console.log(isValidSudoku(example1));
// Output: true
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

let example4 = [
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
// Output: false
console.log(isValidSudoku(example4));
