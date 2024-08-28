// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const cardRoutes = require('./routes/cardRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use card routes
app.use('/api', cardRoutes);

// 404 Error Handler (for undefined routes)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
