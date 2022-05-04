5-4-anonymousFunction-laughs.js

/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

var laugh = function(max){
	var printLaugh = "";
	for (x = max; x > 0; x--){
 		printLaugh = printLaugh + "ha";
 	}
 	return(printLaugh + "!");
 };


console.log(laugh(10));