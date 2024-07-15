import axios from 'axios';

const API_URL = 'https://mernaehab404.github.io/TransactionServer/db.json';

export const fetchCustomers = () => axios.get(`${API_URL}`);
export const fetchTransactions = () => axios.get(`${API_URL}`);

fetchCustomers()
  .then(response => {
    console.log('Customers:', response.data);
  })
  .catch(error => {
    console.error('Error fetching customers:', error);
  });

fetchTransactions()
  .then(response => {
    console.log('Transactions:', response.data);
  })
  .catch(error => {
    console.error('Error fetching transactions:', error);
  });