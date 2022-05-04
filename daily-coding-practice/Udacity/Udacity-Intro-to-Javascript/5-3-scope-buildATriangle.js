5-3-scope-buildATriangle.js

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle.*/

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(max){
	var triangle = ""

	for (var count = 1; count <= max; count++){
		triangle += (makeLine(count));
	}

	return triangle;

}


// test your code by uncommenting the following line
//console.log(buildTriangle(10));