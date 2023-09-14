//https://track-expenses-37552-default-rtdb.firebaseio.com/
import axios from 'axios';
import moment from 'moment';

const apiUrl = 'https://expenses-68be8-default-rtdb.firebaseio.com/';

export async function sendExpenses(expenseData) {
  const response = await axios.post(`${apiUrl}/expense.json`, expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(`${apiUrl}/expense.json`);

  const expenses = [];

  for (const key in response.data) {
    const obj = {
      id: key,
      amount: response.data[key].amount,
      date: moment(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(obj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(`${apiUrl}/expense/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(`${apiUrl}/expense/${id}.json`);
}
