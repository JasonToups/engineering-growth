# Algorithms & Problem Solving Patterns

## What is an Algorithm?

It's a **process** or **set of steps** to accomplish a certain task.

Almost everything that you do in programming involves some kind of algorithm.

It's the **foundation** for being a successful problem solving developer.

## How do you improve at solving problems?

1. **Devise** a plan for solving problems.
2. **Master** common problem solving patterns.

# Problem Solving Strategies

- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve / Simplify
- Look Back & Refactor

## Understand the Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? 
    1. In other words, do I have enough information to solve the problem?
    2. You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.
5. How should I label the important pieces of data that are a part of the problem?

## Explore Concrete Examples

Coming up with examples can help you understand the problem better. 

Examples also provide sanity checks that your eventual solution works how it should.

Create some User Stories!

Unit Tests lay out how something should work for a smaller feature.

- Start with Simple Examples
    - The easiest use cases
- Progress to More Copmlex Examples
- Explore Examples with Empty Inputs
- Explore Examples with Invalid Inputs

```jsx
//Write a function which takes in a string and returns counts of each character 
//in the string.

charCount("aaaa"); // {a: 4}
charCount("hello"); // {h:1, e:1, l:2, o:1}

"my phone number is 43253"
"Hello hi"

//Explore negative and edge cases
charCount(""); // what do we want to return?

```

## Break It Down

Explicity write out the steps you need to take.

This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worrry about the details and language syntax.

```jsx
function charCount(str){
	// do something
	// return an object with keys that are lowercase alphanumeric characters in the string:
}

function charCount(str){
	// make object to return at end
	// loop over the string, for each character...
		// if the char is a number/letter AND is a key in object, add one to count
		// if the char is a number/letter AND not in the object,
			// add the key and set value to 1
		// if character is something else (space, period, etc.) don't do anything
	// return object at end
}
```

Breaking down the problem and writing out your approach is very important during interviews, since sometimes the problems they have you solve are too complicated to solve in one session. 

But if you have the pseudocode, and you write out your approach, it shows the way you would solve the problem, which in most cases is more important than coming up with the full syntatical solution.

## Solve / Simplify

https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11172604?start=0#overview

Now it's time to solve the problem.

If you can't, then solve a simpler problem. If you take this approach, then it might give you some insight into the greater more difficult problem.

- Find the core difficulty in what you're trying to do.
- Temporarily ignore that difficulty.
- Write a simplified solution.
- Then incorporate that difficulty back in.

## Look Back & Refactor