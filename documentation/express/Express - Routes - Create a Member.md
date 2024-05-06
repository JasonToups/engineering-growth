# Express - Routes - Create a Member

## Server - New Imports
Import `JSON Parser` to *parse requests* & `urlencoded` to *handle form submissions* with url encoded data.
`index.js`
```javascript
// ---- Middleware ----
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```
## Member Routes - Post Request
`routes/api/members.js`
```javascript
// Create Member
router.post('/', (req, res) => {
  res.send(req.body);
});

```

### Test Request
In your `POST` API Request, to `/api/members`, include this JSON as the Body:
```json
{
	"name": "Jake Smith",
	"email": "jake@gmail.com"
}
```

You should see the data that we sent in the request body.

## Install UUID to create new unique IDs
In your Terminal, install uuid.
```shell
npm i uuid
```

Import uuid into `members.js`.
```javascript
// ---- External Imports ----
const uuid = require('uuid');
```

## Update Post to create new member
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

### Test the Request
Now make the POST request as before, and you will see the new user added, along with a unique ID and the status set to active.

```json
[
	{
		"id": 1,
		"name": "John Doe",
		"email": "john@gmail.com",
		"status": "active"
	},
	{
		"id": 2,
		"name": "Bob Williams",
		"email": "bob@gmail.com",
		"status": "inactive"
	},
	{
		"id": 3,
		"name": "Shannon Jackson",
		"email": "shannon@gmail.com",
		"status": "active"
	},
	{
		"id": "2a672a60-6223-49d5-bc28-c409be0fd577",
		"name": "Jake Smith",
		"email": "jake@gmail.com",
		"status": "active"
	}
]
```

## Next Guide
[[Express - Routes - Update a Member]]