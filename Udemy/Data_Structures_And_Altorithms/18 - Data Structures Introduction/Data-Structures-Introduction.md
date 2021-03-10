# Data Structures Introduction

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

## Which Data Structure is the Best?

Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

## ES2015 Class Syntax Overview
JS doesn't natively support Object Oriented Programming, but since ES2015, JS added some features that support it.

### What is a Class?
A blueprint for creating objects with pre-defined properties & methods.

### How does Javascript implement the idea of Classes?

JS doesn't really have Classes, but it uses a prototype-based inheretance.

On MDN, under [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), it mentions that the Class syntax does not introduce a new object-oriented inheritance model to JS.

We can implement data structures as Classes.

## Data Structures: The Class Keyword

### Create your Class
The syntax:

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

The method to *create new objects* **must** be called `constructor`.

The `class` keyword creates a constant, so you cannot redefine it.

### Create Objects from Classes

Use the `new` keyword.

```javascript
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
```
Each variable will create a new Student object with the properties listed above.

The properties can be accessed with dot notation like this: `firstStudent.firstName` would give you, `"Colt"`.
## Adding Instance Methods
Instance methods are Class methods that provide functionality to a single instance of a Class.

For example:
```javascript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate(){
    this.tardies += 1;
    if(this.tardies >= 3){
      return "YOU ARE EXPELLED!!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a,b){return a+b;});
    return sum/this.scores.length;
  }
}
```

`fullName()` is an **instance method** that's accessed within the `Student` Class. Any student created from the Student class has access to this fullName() instance method.

`markLate()` is another **instance method** which will add 1 to the tardies count for the student, so the *student data can be manipulated* with an intance method.

`addScore()` manipulates the student data by pushing a value to the scores array, while `calculateAverage()` calculates the average of the student's scores.

## Adding Static Class Methods