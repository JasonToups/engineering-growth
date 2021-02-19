/* Dates & Times */
const today = new Date();

val = today;
valString = today.toString();

console.log(val);
console.log(typeof val);
console.log(typeof valString);

let birthday = new Date('9-10-1981 11:25:00');
console.log(birthday)
birthday = new Date('September 10 1981');
console.log(birthday)

// getMonth will return the month as a number, but January starts as 0, so add one to the month number to get the correct month.
val = today.getMonth();
console.log(val)
val = today.getDate();
console.log(val)
val = today.getDay();
console.log(val)
val = today.getFullYear();
console.log(val)
val = today.getHours();
console.log(val)
val = today.getMinutes();
console.log(val)
val = today.getSeconds();
console.log(val)
val = today.getMilliseconds();
console.log(val)
val = today.getTime();
console.log(val)

birthday.setMonth(2);
console.log(birthday);
birthday.setDate(12);
console.log(birthday);
birthday.setFullYear(1985);
console.log(birthday);
birthday.setHours(3);
console.log(birthday);
birthday.setMinutes(30);
console.log(birthday);
birthday.setSeconds(25);
console.log(birthday);