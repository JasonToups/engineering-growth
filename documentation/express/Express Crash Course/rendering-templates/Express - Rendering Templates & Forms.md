# Express - Rendering Templates  & Forms
## Express-Handlebars - Template Engine
We'll be using [express-handlebars](https://www.npmjs.com/package/express-handlebars#installation) as the template engine to render templates from the backend.
```shell
npm i express-handlebars
```

### Folder Structure
We can create a `views` folder to hold our layouts & templates.
```
.
├── app.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars
```

## Update Server with Handlebars
We are using the [Usage section](https://www.npmjs.com/package/express-handlebars#usage) of the documentation, but using es5 syntax.
```javascript
// ---- External Imports ----
const exphbs = require('express-handlebars');

// ---- Middleware ----
// Handlebars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
```

## Create Views folders
Create folders `views/layouts`, then add the file `main.handlebars` within.

Also grab the CDN for [Bootstrap](https://getbootstrap.com/) to give the page a little style lift.
`main.handlebars`
```javascript
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Members App</title>
    <link
      href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
      rel='stylesheet'
      integrity='sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN'
      crossorigin='anonymous'
    />
  </head>
  <body>

  </body>
</html>
```

In the layout whenever we want to output the rest of the views with handlebars, you want to use triple curly braces and use `body`.

```javascript
<body>
    <div class='container mt-4'>
      {{{body}}}
    </div>
</body>
```

## Create View for Index Page
In the `views` folder, create the `index.handlebars` file.
```javascript
<h1>Members</h1>
```

## To Render, Create a Route
In the `index.js` file, enter the following:

```javascript
// ---- Routes ----
// Homepage Route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Members App',
  });
});
```
Now we can pass the title value to the `index.handlebars` file.
### Update Handlebars
```handlebars
<h1 class="text-center mb-3">{{title}}</h1>
```

## Passing Data into the Index Template

In the `index.js` file, enter the following:
```javascript
// ---- Internal Imports ----
const members = require('./Members');
```
Now we have access to the Members array.

So we can pass the `members` array  into the Template.
```javascript
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Members App',
    members: members,
  });
});
```

## Rendering Data in the Index Template
```handlebars
<h1 class='text-center mb-3'>{{title}}</h1>
<h4>Members</h4>
<ul class='list-group'>
  {{#each members}}
    <li class='list-group-item'>{{this.name}}: {{this.email}}</li>
  {{/each}}
</ul>
```

## Create Form to Make Request to Add a Member

```handlebars
<h1 class='text-center mb-3'>{{title}}</h1>
<form action='api/members' method='POST' class='mb-8'>
  <div class='form-group'>
    <label for='name'>Name</label>
    <input type='text' name='name' class='form-control' />
  </div>
  <div class='form-group'>
    <label for='name'>Email</label>
    <input type='email' name='email' class='form-control' />
  </div>
  <input type='submit' value='Add Member' class='btn btn-primary btn-block' />
</form>
<h4 class='mt-8'>Members</h4>
<ul class='list-group'>
  {{#each members}}
    <li class='list-group-item'>{{this.name}}: {{this.email}}</li>
  {{/each}}
</ul>
```

### Redirect to Home on Success
When the form submits successfully & a member has been added, redirect home. 
In the `routes/api` folder in the `members.js` file
```javascript
// Create Member
router.post('/', (req, res) => {
  const newMember = {
    // Use a library to generate a random ID
    id: uuid.v4(),
    // Grab the name and email from the body
    name: req.body.name,
    email: req.body.email,
    // Set the status to active by default
    status: 'active',
  };
  // If the name and email are not provided, send a 400 error
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }
    // Add the new member to the array
  members.push(newMember);
  // Return the new member as JSON
  // res.json(members);
  // Redirect to Home
  // res.redirect('/');
});
```

#### Submit Form
After submitting the form, you should see the new member added to the bottom of the list.

## Restore POST Route to Return JSON
`members.js`
```javascript
// Create Member
router.post('/', (req, res) => {
  const newMember = {
    // Use a library to generate a random ID
    id: uuid.v4(),
    // Grab the name and email from the body
    name: req.body.name,
    email: req.body.email,
    // Set the status to active by default
    status: 'active',
  };
  // If the name and email are not provided, send a 400 error
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }
  // Add the new member to the array
  members.push(newMember);
  // Return the new member as JSON
  res.json(members);
});
```

## Add API button to Index
`index.handlebars`
```handlebars
<h1 class='text-center mb-3'>{{title}}</h1>
<form action='api/members' method='POST' class='mb-8'>
  <div class='form-group'>
    <label for='name'>Name</label>
    <input type='text' name='name' class='form-control' />
  </div>
  <div class='form-group'>
    <label for='name'>Email</label>
    <input type='email' name='email' class='form-control' />
  </div>
  <input type='submit' value='Add Member' class='btn btn-primary btn-block' />
</form>
<h4 class='mt-8'>Members</h4>
<ul class='list-group'>
  {{#each members}}
    <li class='list-group-item'>{{this.name}}: {{this.email}}</li>
  {{/each}}
</ul>
<a href='/api/members' class='btn btn-light mt-4'>Visit API</a>
```

When you click on the button, you should see the raw JSON.

## Back to Main
[[Express Crash Course]]