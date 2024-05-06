Here's the [link to the final code on GitHub](https://github.com/bradtraversy/express_crash_course) from the crash course.
More notes in this series:
1. [[Express - Creating your Server]]
2. [[Express - Routes - Read all Members]]
# #Express notes
Taken from [Brad Traversy's Express JS Crash Course on YouTube](https://www.youtube.com/watch?v=L72fhGm1tfE).

It's an **unopinionated** & minimalist **server-side** or *back-end* web framework.

## Why use Express
- makes building web applications with #Node.js MUCH easier. 
- Used for both server rendered apps as well as API/Microservices
- Extremely light, fast & free.
- Full control of request & response. 
- By far the most popular Node framework.
- Great to use with client side frameworks as it's all JavaScript.

## What to Know 1st
- JavaScript fundamentals (Objects, Arrays, Conditionals, etc.)
- [Basic Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) & NPM
### It may help to learn these first
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [High Order Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) - forEach, map, filter
- [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Basic Server Syntax
Create a server with the `server.js` file.
```javascript
const express = require('express');

// Init express
const app = express();

// Create your endpoints/route handlers
app.get('/', function(req,res) {
	res.send('Hello World!');
});

// Listen on a port
app.listen(5000);
```

## Basic Route Handling
- Handling #requests and #routes is simple
- `app.get()` , `app.post()`, `app.put()`, `app.delete()`, etc.
- Access to params, #query strings, url parts, etc.
- Express has a #router, so we can store routes in separate files & export.
- We can parse incoming data with the `Body Parser`.

## Express #middleware
**Middleware functions** are functions that have access to the #request & #response object. Express has built in middleware but middleware also comes from 3rd party packages As well as custom middleware.

- execute any code
- make changes to the request & response objects
- End response cycle
- Call next middleware in the stack

## Next Guide
[[Express - Creating your Server]]