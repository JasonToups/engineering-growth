4-2-whileLoops-99bottlesOfJuice.js

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

//This answer was rejected in the editor for the quiz, but I submitted my feedback and I'm waiting to hear back from Udacity cust support.

var num = 99;
var bottle = "";

while (num > -1) {
    // check value of num
    if (num > 1) {

    	bottle = "bottles";

    } else if (num === 1) {

    	bottle = "bottle";

    } else if (num === 0) {

    	bottle = "bottles";

    } 
    // print lyrics using num
    console.log(num + " " + bottle + " of juice on the wall! " + num + " " + bottle + " of juice! Take one down, pass it around"  + "." + "." + "." + " " + num + " " + bottle + " of juice on the wall!");
    // don't forget to check pluralization on the last line!
    // decrement num
    num --;
}
