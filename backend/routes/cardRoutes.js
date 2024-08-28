// backend/routes/cardRoutes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Card = require('../models/Card');

// Create a new card
router.post('/cards', async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required.' });
    }

    try {
        const card = new Card({
            id: new mongoose.Types.ObjectId().toString(), // Generate a unique ID
            title,
            description
        });
        await card.save();
        res.status(201).json(card);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Get all cards
router.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Get a specific card by title
router.get('/cards/:title', async (req, res) => {
    const { title } = req.params;

    try {
        const card = await Card.findOne({ title });
        if (!card) {
            return res.status(404).json({ message: 'Card not found.' });
        }
        res.json(card);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

module.exports = router;
