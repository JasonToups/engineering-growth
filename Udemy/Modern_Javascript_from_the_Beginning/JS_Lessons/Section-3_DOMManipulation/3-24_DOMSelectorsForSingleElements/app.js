/* Block Scope with Let & Const */

// Global Scope
var a = 1;
let b = 2;
const c = 3;
console.log('Global Scope: ', a, b, c);

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('In the function, a, b, and c are being overwritten from the global scope.')
  console.log('Function Scope: ', a, b, c);
}
test();

// if (true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Within the if block, a,b,c are being overwritten, but only within the block of the if statement.')
//   console.log('If Scope: ', a, b, c);
// }


for (let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Var a is getting overwritten in the global scope, but let b and const c remain defined as they were originally.')
console.log('Global Scope: ', a, b, c);

