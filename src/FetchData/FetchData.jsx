import axios from 'axios';

const API_URL = 'https://mernaehab404.github.io/TransactionServer/db.json';

export const fetchCustomers = () => axios.get(`${API_URL}/customers`);
export const fetchTransactions = () => axios.get(`${API_URL}/transactions`);
