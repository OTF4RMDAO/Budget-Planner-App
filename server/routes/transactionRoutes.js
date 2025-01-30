// routes/transactions.js
const express = require('express');
const { createTransaction, getTransactions } = require('../controllers/transactionController');
const router = express.Router();

// Create a transaction
router.post('/createTrax', createTransaction);

// Get all transactions for a user
router.get('/:userId', getTransactions);
module.exports = router;