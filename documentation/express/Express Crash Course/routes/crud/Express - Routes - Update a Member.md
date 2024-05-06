# Express - Routes - Update a Member

## Create PUT Request
In the members.js routes file, add the PUT request to update a Member's info.

```js
// Update Member
router.put('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    // Grab the URL Parameter and look for a member with that ID
    // Send the ID as an integer, because it's a string by default
    const updMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        // If the name is provided, update the name
        member.name = updMember.name ? updMember.name : member.name;
        // If the email is provided, update the email
        member.email = updMember.email ? updMember.email : member.email;
        // Return the updated member
        res.json({ msg: 'Member updated', member });
      }
    });
  } else {
    // Send a 400 error
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});
```

 ### Test Request
 Make a PUT request to include one of the user ids that we already have.
 **PUT** `{{ _.base_path }}/api/members/3`

```json
{
	"name": "Jakes Smiths",
	"email": "jake@gmail.com"
}
```

Then you should see this as a response:
```json
{
	"msg": "Member updated",
	"member": {
		"id": 3,
		"name": "Jakes Smiths",
		"email": "jake@gmail.com",
		"status": "active"
	}
}
```

## Next Guide
[[Express - Routes - Delete a Member]]