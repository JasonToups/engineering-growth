3-9-switchStatements-backToSchool.js

/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

switch (education) {
  case "no high school diploma":
salary = "$25,636";
break;
  case "a high school diploma":
salary = "$35,256";
break;
  case "an Associate's degree":
salary = "$41,496";
break;
  case "a Bachelor's degree":
salary = "$59,124";
break;
  case "a Master's degree":
salary = "$69,732";
break;
  case "a Professional degree":
salary = "$89,960";
break;
  case "a Doctoral degree":
salary = "$84,396";
break;
}
console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.");
