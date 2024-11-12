// Import the express module
const express = require('express');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.get('/about', (req, res) => {
  res.send('<h1>About Me</h1><p>This is a page about my website.</p>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1><p>You can contact me through my email.</p>');
});

// Set the port the server will listen on
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});