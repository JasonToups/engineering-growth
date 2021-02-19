4-7-forLoop-factorials.js

/*
 * Programming Quiz: Factorials (4-7)
 */

/*Directions:
Write a for (note: not a function) loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6 */

var solution = 1

for (var x = 12; x > 0; x--){
	solution *= x;
	}
	console.log(solution);
}