// backend/server.js
const express = require('express');
const connectDB = require('./db'); // Import the DB connection
const Card = require('./models/Card'); // Import the Card model

const app = express();
const port = 8000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Test route to add a card
app.post('/cards', async (req, res) => {
    try {
        const { id, title, description } = req.body;
        const newCard = new Card({ id, title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Test route to get all cards
app.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
