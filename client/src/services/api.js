import axios from 'axios';

// Create an instance of axios with the base URL of the backend
const API = axios.create({ baseURL: 'http://localhost:5000' });

// Function to register a user
export const registerUser = (formData) => API.post('/auth/register', formData);

// Function to fetch budgets
export const fetchBudgets = () => API.get('/budgets');

// Function to add a budget
export const addBudget = (budgetData) => API.post('/budgets', budgetData);

// Function to update a budget
export const updateBudget = (id, budgetData) => API.put(`/budgets/${id}`, budgetData);

// Function to delete a budget
export const deleteBudget = (id) => API.delete(`/budgets/${id}`);

// Function to fetch transactions
export const fetchTransactions = () => API.get('/transactions');

// Function to add a transaction
export const addTransaction = (transactionData) => API.post('/transactions', transactionData);
