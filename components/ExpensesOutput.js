import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Colors from '../constants/Colors';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const ExpensesOutput = ({expenses, expensesPeriod, fallbackText}) => {
  let content = <Text style={styles.info}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primaryBackground,
  },

  info: {
    color: Colors.redPink,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default ExpensesOutput;
