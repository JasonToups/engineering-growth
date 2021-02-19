/* Object Literals */

const person = {
  firstName: 'Jason',
  lastName: 'Toups',
  age: 30,
  email: 'jason@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Oakland',
    state: 'CA'
  },
  getBirthYear: function () {
    // when referencing a property from within an object, use 'this.' instead of the object name
    return 2020 - this.age;
  }
}

console.log(person.firstName);
console.log(person['firstName']);
console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.address.state);
console.log(person.address['city']);
console.log(person.getBirthYear());

const people = [
  { name: 'John', age: 30 },
  { name: 'Rick', age: 23 }
]

people.forEach(person => console.log(person.name))