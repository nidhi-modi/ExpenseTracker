import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useContext, useLayoutEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ExpenseForm from '../components/ManageExpenses/ExpenseForm';
import ManageTitle from '../components/ManageTitle';
import Colors from '../constants/Colors';
//import {addExpense, deleteExpense, updateExpense} from '../redux/expenses';
import {ExpensesContext} from '../redux/expenses-context';
import IconButton from '../UI/IconButton';
import {deleteExpense, sendExpenses, updateExpense} from '../util/httpHelper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LoadingOverlay from '../UI/LoadingOverlay';
import ErrorOverlay from '../UI/ErrorOverlay';

const ManageExpenses = ({navigation}) => {
  const route = useRoute();
  const expensesCtx = useContext(ExpensesContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  //const dispatch = useDispatch();
  //const allExp = useSelector(state => state.expenseTracker.allExpenses);
  const expID = route.params?.expenseId;
  const isEditing = !!expID;

  const selectedExpense = expensesCtx.expenses.find(
    expense => expense.id === expID,
  );
  function cancelHandler() {
    navigation.goBack();
  }

  async function confimHandler(expenseData) {
    setIsLoading(true);

    try {
      if (isEditing) {
        expensesCtx.updateExpense(expID, expenseData);
        await updateExpense(expID, expenseData);
      } else {
        const id = await sendExpenses(expenseData);
        expensesCtx.addExpense({...expenseData, id: id});
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not save data - Please try again later');
      setIsLoading(false);
    }
  }

  async function deletedPressHandler() {
    //dispatch(deleteExpense({id: expID}));
    setIsLoading(true);

    try {
      await deleteExpense(expID);
      expensesCtx.deleteExpense(expID);
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense - Please try again later');
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (error && !isLoading) {
    return <ErrorOverlay message={error} />;
  }

  return (
    <KeyboardAwareScrollView style={styles.rootContainer}>
      <ManageTitle>{isEditing ? 'Edit Expense' : 'Add Expense'}</ManageTitle>
      <View style={styles.container}>
        <ExpenseForm
          onCancel={cancelHandler}
          onSubmit={confimHandler}
          editing={isEditing}
          updatedValue={selectedExpense}
        />

        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              name={'trash'}
              color={Colors.error500}
              size={24}
              onPress={deletedPressHandler}
            />
          </View>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
  },
  container: {
    flex: 1,
    padding: 24,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary700,
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

export default ManageExpenses;
