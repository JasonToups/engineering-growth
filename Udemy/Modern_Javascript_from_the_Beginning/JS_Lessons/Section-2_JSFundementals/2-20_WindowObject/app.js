/* Window Object */
// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('Are you sure?')) {
//   console.log('YES');
// } else {
//   console.log('NO')
// }

// Outter height and width
let val = window.outerHeight;
let val2 = window.outerWidth
console.log(val);
console.log(val2);
// Inner height and width
let val3 = window.innerHeight;
let val4 = window.innerWidth
console.log(val3);
console.log(val4);

// Scroll points
let scroll = window.scrollY;
console.log(scroll)

// Location object
let winLocation = window.location;
console.log(winLocation);
console.log(winLocation.hostname);
console.log(winLocation.port);
console.log(winLocation.href);
console.log(winLocation.search);

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// History Object
// You can go back into your history, for a breadcrumb trail
// window.history.go(-2);

// Navigator Object
winNavigator = window.navigator;
console.log(winNavigator);
console.log(winNavigator.appName);
console.log(winNavigator.appVersion);
console.log(winNavigator.userAgent);
console.log(winNavigator.platform);
console.log(winNavigator.vendor);
console.log(winNavigator.language);
