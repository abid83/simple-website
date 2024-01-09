const express = require('express');
const app = express();
const port = 3000; // Choose any available port

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, this is a simple website!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
