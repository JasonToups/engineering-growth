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

On MDN, under Classes, it mentions that the Class syntax does not introduce a new object-oriented inheritance model to JS.

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
Each will create a new Student object with the properties listed above.



## Adding Instance Methods
## Data Structures: Adding Class Methods