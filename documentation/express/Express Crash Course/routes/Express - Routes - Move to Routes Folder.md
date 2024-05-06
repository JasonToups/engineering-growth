# Express - #Routes - Move to Routes Folder
## Create a Routes folder
In the root directory, create the `routes` folder. 

### Create the Api folder
Now within the Routes folder, create the `api` folder.

#### Create the `members.js` file
Within the `api` folder, create the `members.js` file.

## Cut the Routes from the Server
And paste it into the `members.js` file
```javascript
// ---- Routes ----
// Gets all Members
app.get('/api/members', (req, res) => {
  // Return members as JSON
  res.json(members);
});
// Gets a single Member by ID, by adding a URL Parameter
app.get('/api/members/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    // Grab the URL Parameter and look for a member with that ID
    // Send the ID as an integer, because it's a string by default
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    // Send a 400 error
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});
```

## Add Imports
In the `members.js` file, we need access to the [**Express Router**](https://expressjs.com/en/5x/api.html#router), so let's add that.
Also, we need Express & the Members Data.

`members.js`
```javascript
// ---- External Imports ----
const express = require('express');
// ---- Instanced Modules ----
const router = express.Router();
// ---- Internal Imports ----
const members = require('../../Members');
```

## User Router
Now whenever we use our routes, we're going to use `router` instead of `app`.
`members.js`
```javascript
// ---- Routes ----
// Gets all Members
router.get('/api/members', (req, res) => {
  // Return members as JSON
  res.json(members);
});
// Gets a single Member by ID, by adding a URL Parameter
router.get('/api/members/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    // Grab the URL Parameter and look for a member with that ID
    // Send the ID as an integer, because it's a string by default
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    // Send a 400 error
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

```

Now we're dealing with the Members, so we should move the Members import from the server into this members.json file.
## Export Members Router
```javascript
// ---- Exports ----
module.exports = router;
```

## Update Server to point to the Routes

The first argument in `app.use` will set the route for the request.
The second argument will point to the route file for the members.
`index.js`
```javascript
// ---- Routes ----
// Members API Routes
app.use('/api/members', require('./routes/api/members'));
```


## Next Guide
[[Development/Documentation/Express/Express - Routes - Create a Member]]
