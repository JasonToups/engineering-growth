const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Oakland';

// Without template strings (es5)
let html = '<h1>Pre-es6 HTML Template Single Line</h1><ul><li>Name: ' + name + ' </li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
document.body.innerHTML = html;

let html2 = '<h1>Pre-es6 HTML Template Concat</h1><ul>' +
  '<li>Name: ' + name + ' </li>' +
  '<li> Age: ' + age + '</li>' + '<li>Job: ' + job + '</li>' + '<li>City: ' + city + '</li></ul > ';
document.body.innerHTML += html2;

function hello() {
  return 'hello';
}

// With template strings (es6)
let html3 = `
<h1>Template Literal</h1>
<ul>
  <li>Name: ${name}
  </li>
  <li>Age: ${age}
  </li>
  <li>Job: ${job}
  </li>
  <li>City: ${city}
  </li>
  <li>${hello()}
  </li>
  <li>${age > 30 ? 'Over 30' : 'Under 30'}
  </li>
</ul>
`;

document.body.innerHTML += html3;
