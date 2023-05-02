const express = require('express');
const app = express();

// Endpoint 1: Get request
app.get('/api/users', (req, res) => {
  res.json({ message: 'List of users' });
});

// Endpoint 2: Post request
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  // Save the new user to the database or perform some other action
  res.json({ message: 'User created successfully' });
});

// Endpoint 3: Put request
app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  // Update the user in the database or perform some other action
  res.json({ message: `User ${userId} updated successfully` });
});

// Endpoint 4: Delete request
app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  // Delete the user from the database or perform some other action
  res.json({ message: `User ${userId} deleted successfully` });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
