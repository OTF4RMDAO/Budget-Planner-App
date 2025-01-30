const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const dbUrl = process.env.MONGO_URI;

// Import Routes
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

// MongoDB Connection
mongoose.connect(dbUrl).then(() => {
    console.log('Connected to MongoDB');
    const app = express();
    const port = 5000;

    // Middleware
    app.use(express.json());
    app.use(cors());

    // Mount Routes on /api
    app.use('/api', userRoutes);
    app.use('/api', transactionRoutes);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => {
    console.log("Failed to connect to MongoDB", err)
})