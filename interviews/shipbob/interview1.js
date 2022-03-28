document.getElementById("app").innerHTML = `
<h1>Click Counter!</h1>
<div>
  Challenge: build a simple app that counts how many times a user has clicked a button.
</div>
<button id="btn">Click me</button>
`;

/*

1. Make a button that you can track how many times a user has clicked it
2. Make the count private
3. Call this api endpoint on click - https://jsonplaceholder.typicode.com/photos/:count - using the next count value as the count number
4. Implement debounce / throttle to prevent too many requests from being fired off on multiple clicks

Notes

Hook up an event listener on the button
event listener function should count how many times the button has been pressed
variable for count
use string interperlation for the count value, using the count variable

Function for api call
variable for url
*/

document.getElementById("btn").addEventListener("click", clickHandler().add);

function clickHandler(event) {
  let count = 0;
  return {
    add: function () {
      count += 1;
      console.log(count);
      // invoke function for api call and pass count as argument
      apiCall(count);
    }
  };
}

function apiCall(number) {
  fetch(`https://jsonplaceholder.typicode.com/photos/${number}`).then(
    (reponse) => {
      return reponse.json();
    }
  );
}

function debounce(func, timeout = 300) {}
// have the debounce funciton set a timer when the user stops typing, and then make the api call after the threshold has been met.
// If the user starts typing again, then the timer is reset.
