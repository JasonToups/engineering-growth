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

They are **commonly used** when defining Classes.

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
**Static Methods** are only for the Class, and not an instance of a class. 

Here's the [MDN reference for static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static).

> The static keyword defines a static method or property for a class. Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself. Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

They are **not as commonly used** as Instance methods.

To create a static method, use the word `static` before defining your method.

Here's how to add a static method within the above Student class:
```javascript
  }

  static enrollStudents(...students){
    // maybe send an email here.
  }
}
// you call the method by using Student, not student.
Student.enrollStudents([firstStudent, secondStudent]);
```
# Overview
- Classes are *blueprints* that when created make objects known as **instances**.
- Classes are created with the `new` keyword.
- The **contructor** function is a special function that gets run when the class is instantiated.
- Instance methods can be added to classes similar to methods in objects.
- Class methods can be added using the `static` keywoard.
