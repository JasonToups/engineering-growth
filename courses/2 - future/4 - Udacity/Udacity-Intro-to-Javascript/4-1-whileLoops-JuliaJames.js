4-1-whileLoops-JuliaJames.js

/*
 * Programming Quiz: JuliaJames (4-1)
 */

/*Directions:
Write a while loop that:

Loop through the numbers 1 to 20
If the number is divisible by 3, print "Julia"
If the number is divisible by 5, print "James"
If the number is divisible by 3 and 5, print "JuliaJames"
If the number is not divisible by 3 or 5, print the number*/

var x = 1;

while (x <= 20) {
    // check divisibility - This works!
    if ((x % 3 === 0) && (x % 5 === 0)){
    	console.log("JuliaJames");
    } else if (x % 3 === 0){
    	console.log("Julia");
    } else if (x % 5 === 0){
    	console.log("James");
    } else if ((x % 3 !== 0) && (x % 5 !== 0)){
    	console.log(x);
    }
    // print Julia, James, or JuliaJames
    // increment x - This works!
    x ++;
}