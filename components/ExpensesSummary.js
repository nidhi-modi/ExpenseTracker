import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Colors from '../constants/Colors';

const ExpensesSummary = ({periodName, expenses}) => {
  const expensesSum = expenses.reduce((sum, expenses) => {
    return sum + expenses.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.periodStyle}>{periodName}</Text>
      <Text style={styles.amountStyling}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 8,
    justifyContent: 'space-between',
    padding: 10,
  },
  amountStyling: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.redPink,
  },
  periodStyle: {
    fontSize: 13,
    color: Colors.primary500,
  },
});

export default ExpensesSummary;
