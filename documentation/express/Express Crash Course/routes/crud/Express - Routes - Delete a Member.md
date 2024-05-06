# Express - Routes - Delete a Member

## Create DELETE Request
In the members.js routes file, add the **DELETE** request to delete a Member.

```js
// Delete Member
// Define a DELETE route with a dynamic 'id' parameter
router.delete('/:id', (req, res) => {
  // Check if there is a member with the provided 'id'
  const found = members.some((member) => member.id === parseInt(req.params.id));

  // If a member with the provided 'id' is found
  if (found) {
    // Send a JSON response with a success message and the updated members list
    res.json({
      msg: 'Member deleted',
      members: members.filter(
        // Filter out the member with the provided 'id'
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    // If a member with the provided 'id' is not found, send a 400 error with a failure message
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});
```

 ### Test Request
 Make a DELETE request to include one of the user ids that we already have.
 **DELETE** `{{ _.base_path }}/api/members/3`

> Do not include anything in the Body of this request

Then you should see this as a response:
```json
{
	"msg": "Member deleted",
	"members": [
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
		}
	]
}
```

## Next Guide
[[Express - Rendering Templates & Forms]]
