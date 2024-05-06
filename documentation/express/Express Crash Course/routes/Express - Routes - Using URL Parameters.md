# Express - #Routes - Using URL Parameters
## Get a Single Member
Now let's lookup a single member by id.
```javascript
// Gets a single Member by ID, by adding a URL Parameter
app.get('/api/members/:id', (req, res) => {
  // Grab the URL Parameter and send it in the body of the request
  res.send(req.params.id);
});
```

> [!NOTE] URL Parameters
> the `:id` is a URL Parameter

### Test the request
For the request, do not include the colon, and replace 'id' with the id number of the member you want to retrieve.
```shell
{{ _.base_path }}/api/members/1
```
You should see the number `1` in the response.

> [!NOTE] Insomnia Base Path
> In **Insomnia**, you can set a `_.base_path` variable to configure the base URL path of your requests. So if you change from Local Development Testing to Stage or Production Testing, you can just update the variable to test the different URL paths.

## Look for Member with ID
Respond with the Member, matching the ID being passed into the URL Params. 

Filter through all of the Members in the Database until finding the Member with the matching ID.

```javascript
// Gets a single Member by ID, by adding a URL Parameter
app.get('/api/members/:id', (req, res) => {
  // Grab the URL Parameter and look for a member with that ID
  // We need to send the ID as an integer, because it's a string by default
  res.json(members.filter((member) => member.id === parseInt(req.params.id)));
});
```

### Test the Request
Now if you test the same route, the response will include the entire Member object, with all of their information.

```json
[
	{
		"id": 1,
		"name": "John Doe",
		"email": "john@gmail.com",
		"status": "active"
	}
]
```

## Error Handling
Now if you look for a member id that does not exist, we need to handle this exception with an error message that we could display on the front end.

We're going to use the **some method**, which is a *[High Order Array Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)*.  It returns `true` if, in the array, it finds an element for which the provided function returns true; otherwise it returns `false`.

In the request, add the following 
```javascript
// Gets a single Member by ID, by adding a URL Parameter
app.get('/api/members/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    // Grab the URL Parameter and look for a member with that ID
    // We need to send the ID as an integer, because it's a string by default
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    // Send a 400 error
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});
```

### Test Request
If you look for the Member ID 6, then you should see this:
```json
{
	"msg": "No member with the id of 6"
}
```

## Next Guide
[[Express - Routes - Move to Routes Folder]]