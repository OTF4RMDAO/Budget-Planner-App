// controllers/transactionController.js
const Transaction = require('../models/Transaction');

// Create a new transaction
const createTransaction = async (req, res) => {
    const { user, type, category, amount, date } = req.body;
    try {
        const newTransaction = new Transaction({ user, type, category, amount, date });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all transactions for a user
const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.params.userId });
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createTransaction,
    getTransactions,
};