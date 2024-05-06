# Asynchronous Operations

## [`async` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)

The **`async function`** keywords can be used to define an async function inside an expression.

You can also define async functions using the [`async function` declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) or the [arrow syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

```javascript
async function (param0) {
  statements
}
async function (param0, param1) {
  statements
}
async function (param0, param1, /* …, */ paramN) {
  statements
}

async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
  statements
}

```


### Description
An `async function` expression is very similar to, and has almost the same syntax as, an [`async function` declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). The main difference between an `async function` expression and an `async function` declaration is the _function name_, which can be omitted in `async function` expressions to create _anonymous_ functions. An `async function` expression can be used as an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) (Immediately Invoked Function Expression) which runs as soon as it is defined, allowing you to mimic [top-level await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await). See also the chapter about [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) for more information.

### Example
 ```javascript
 function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

// async function expression assigned to a variable
const add = async function (x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

// async function expression used as an IIFE
(async function (x) {
  const p1 = resolveAfter2Seconds(20);
  const p2 = resolveAfter2Seconds(30);
  return x + (await p1) + (await p2);
})(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});

```