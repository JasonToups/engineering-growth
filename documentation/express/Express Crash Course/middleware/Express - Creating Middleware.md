# Creating #Middleware

**Middleware** handles operations after a route receives a request. It **has access** to both the #request & #response. So it will *process* the *request* & *handle* the *response*. 

When you create Middleware, it takes in **request**, **response**, & **next**.
- `next` allows you to move to the next operation in the Stack, so it will always be called **last**.
## Creating a Logger
```javascript
// ---- Middleware ----
const logger = (req, res, next) => {
	console.log('Hello');
	next();
};
// Init middleware
app.use(logger);
```

### Test Request
Now make a `GET` request to `http://localhost:8080/api/members`

And you should see 'Hello' in the Express Server.

## Update Logger
Now we're going to update the logger with the request URL & the date.
The request object has information we can pull out of it and use it in different operations.

```javascript
const logger = (req, res, next) => {
console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
	next();
};

```

### Test Request
After testing the request again, you will see the whole URL printed out to the console log in your Express server.

## Install Moment
Now we're going to install the npm package Moment, which handles dates.
First, stop your Express server, then in the Terminal, install Moment.

```shell
npm i moment
```

Then run your Express server again, & import moment into your index.js server file.

```javascript
const moment = require('moment');
```

Now add moment to the end of the console log in your logger.

```javascript
const logger = (req, res, next) => {
	console.log(
		`${req.protocol}://${req.get('host')}${
			req.originalUrl
			}: ${moment().format()}}`
	);
	next();
};
```


> [!Note] how to use Moment
> `moment()` - invokes moment function
> `.format()` - is the format method to give use the current date format

Now you should see the date after the url.
```shell
[nodemon] starting `node index.js`
Server running on http://localhost:8000
http://localhost:8000/api/members: 2023-12-19T13:32:55-08:00}
```
## Moving Logger to Middleware folder
Now that we have this logger middleware function, let's move it to the `/middleware` folder. 
Then create a file called `logger.js`
```javascript
// ---- External Imports ----
const moment = require('moment');

const logger = (req, res, next) => {
	console.log(
		`${req.protocol}://${req.get('host')}${
		req.originalUrl
	}: ${moment().format()}}`
	);
	next();
};

module.exports = logger;

```

Now import it into your `index.js` server file.
```javascript
// ---- Middleware ----
const logger = require('./middleware/logger');
// Init middleware
app.use(logger);
```

## Next Guide
[[Express - Routes - Using URL Parameters]]