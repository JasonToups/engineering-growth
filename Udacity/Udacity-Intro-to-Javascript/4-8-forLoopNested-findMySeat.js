4-8-forLoopNested-findMySeat.js

/* for (var x = 0; x < 5; x = x + 1) {
   for (var y = 0; y < 3; y = y + 1) {
	 console.log(x + "," + y);
   }
 }
 */

 /*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

for (var row = 0; row < 26; row++){
	for (var seat = 0; seat < 100; seat++){
		console.log(row + "-" + seat)
	}
}

