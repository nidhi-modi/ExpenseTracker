import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {State} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import ExpensesOutput from '../components/ExpensesOutput';
import {ExpensesContext} from '../redux/expenses-context';

const AllExpenses = () => {
  //const dispatch = useDispatch();
  //const allExp = useSelector(state => state.expenseTracker.allExpenses);
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={'Total'}
      fallbackText={'No registered expenses found.'}
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

export default AllExpenses;
