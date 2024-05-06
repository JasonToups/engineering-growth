# Creating your Server
Create a directory called 'Express Crash Course'.
Open it up in VSCode.

## Create package.json
Then open your Terminal and type:
```shell
npm init -y
```
> the `-y` flag removes the need to answer a bunch of questions in your Terminal

## Install Express
Now let's install Express
```shell
npm i express
```

Then you will see the express package in the dependencies of your package.json file.
```json
{
	"name": "express-crash-course",
	"version": "1.0.0",
	"description": "",
	"main": "server.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"start": "node server.js"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
	"express": "^4.18.2"
	}
}
```

## Create index.js file
In your main project folder, create your `index.js` file.
```javascript
// ---- External Imports ----
const express = require('express');
// ---- Instanced Modules ----
const app = express();
// When we run this on an environment, we want to check for the environment variable 1st. If it's not available, then it will default to port 5000
const PORT = process.env.PORT || 8080;

// ---- Routes ----
app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

// Listen on a port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## Run the server
In Terminal enter this command:
```shell
node server.js
```

You will see your server running on the port 8080 that we already setup.

## Go to Localhost:8080
In your Browser, go to the [localhost:8080](localhost:8080) and you should see **Hello World**


## Install Nodemon
Nodemon will prevent the need to restart your server everytime a file is updated in your Express server.
```shell
npm i -D nodemon
```
> we are adding the flag `-D` to add this as a **Dev Dependency**. Since we are not going to use this in Production.

### Check package.json
Now check your `package.json` file for the added devDependency

```json
{
	"name": "express-crash-course",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"start": "node server.js"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
	"express": "^4.18.2"
	},
	"devDependencies": {
		"nodemon": "^3.0.2"
	}
}
```

## Update Server Scripts in package.json
In the `package.json`, update these scripts:

```shell
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"start": "node index",
	"dev": "nodemon index"
},
```

When we start our server in Production, we are just going to use the `start` script. 

But as we are developing locally, we will be using the `npm run dev` command to use #nodemon to automatically restart our server whenever new changes are made.

### Start your server with nodemon
```shell
npm run dev
```

## Update index.js
### Use Node Path Module
In index.js, add path under express:
```javascript
// ---- External Imports ----
const express = require('express');
const path = require('path');
```

### Send a file from the Public Directory
In index.js in the get request:
```javascript
// ---- Instanced Modules ----
// set static folder - this is where we put our front end files
// .use is a method that allows us to use middleware
app.use(express.static(path.join(__dirname, 'public')));
```

## Create public Directory & index.html
Create a `public` directory in the main project directory, then create an `index.html` file.
```shell
mkdir public
cd public
touch index.html
```

Open the index.html file and add some HTML boilerplate with Emmet.
In the file, enter `!` and then hit enter.

The following should appear:
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>

</body>
</html>
```

Change the title to My Website:
```html
<title>My Website</title>
```

Add h1 tag in the body
```html
<body>
	<h1>My Website</h1>
</body>
```

## Verify Updates in Browser
Now save everything & refresh your browser.
Inspect the page by opening up your Browser Devtools.
Usually by right-clicking the background of the page, and selecting Inspect.

In the Elements tab, you should see the the HTML we just setup.

## Next Guide
Here's the next document to Create your Routes.
[[Express - Routes - Read all Members]]
