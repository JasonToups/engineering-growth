# Express - Routes - Read all Members
## Create Members Data
Create a Members.js file for your members data in the root of your project.
```javascript
const members = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john@gmail.com',
		status: 'active',
	},
	{
		id: 2,
		name: 'Bob Williams',
		email: 'bob@gmail.com',
		status: 'inactive',
	},
	{
		id: 3,
		name: 'Shannon Jackson',
		email: 'shannon@gmail.com',
		status: 'active',
	},
];

module.exports = members;
```
### Import Members Data to Server
```javascript
// ---- Internal Imports ----
const members = require('./Members');
```
## Add Routes to Server
In the index.js file, add your routes.

```javascript
// ---- Routes ----
// Gets all Members
app.get('/api/members', (req, res) => {
	// We don't need to use JSON.stringify() because express has a method for that
	res.json(members);
});
```

## Next Guide
[[Express - Creating Middleware]]
