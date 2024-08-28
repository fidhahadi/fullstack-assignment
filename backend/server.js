// server.js
const express = require('express');
const app = express();
const port = 8000; // You can choose any port

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route for testing
app.get('/ping', (req, res) => {
    res.send('Pong');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
