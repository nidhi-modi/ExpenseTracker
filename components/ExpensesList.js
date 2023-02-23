import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderDataList(itemData) {
  return <ExpenseItem expenseData={itemData.item} />;
}

const ExpensesList = ({expenses}) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderDataList}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({});

export default ExpensesList;
