// 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET request handler
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// POST request handler
app.post('/post-example', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).send('Message is required');
  }
  // Here you can process the received message
  res.send(`Received message: ${message}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
