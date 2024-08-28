// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const cardRoutes = require('./routes/cardRoutes'); // Import card routes

const app = express();
const port = 8000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use card routes
app.use('/api', cardRoutes); // Prefix routes with '/api'

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
