import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ExpensesOutput from '../components/ExpensesOutput';
import moment from 'moment';
import {ExpensesContext} from '../redux/expenses-context';
import {fetchExpenses} from '../util/httpHelper';
import LoadingOverlay from '../UI/LoadingOverlay';
import ErrorOverlay from '../UI/ErrorOverlay';

const RecentExpenses = () => {
  //const dispatch = useDispatch();
  //const allExp = useSelector(state => state.expenseTracker.allExpenses);
  const expensesCtx = useContext(ExpensesContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  async function getExpenses() {
    setIsLoading(true);
    try {
      const exp = await fetchExpenses();
      expensesCtx.setExpenses(exp);
    } catch (error) {
      setError('Could not fetch expenses!');
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getExpenses();
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (error && !isLoading) {
    return <ErrorOverlay message={error} />;
  }

  const recentExpense = expensesCtx.expenses.filter(expense => {
    const today = moment(new Date());
    const date7DaysAgo = moment(today).subtract(7, 'd');

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpense}
      expensesPeriod={'Last 7 days'}
      fallbackText={'No expenses registered for the last 7 days'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecentExpenses;
