import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Keyboard,
  Pressable,
} from 'react-native';
import Colors from '../../constants/Colors';
import Input from './Input';
import CustomButton from '../../UI/CustomButton';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

const screenHeight = Dimensions.get('window').height;

const ExpenseForm = ({onCancel, onSubmit, editing, updatedValue}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: updatedValue ? updatedValue.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: updatedValue ? updatedValue.date.toISOString().slice(0, 10) : '',
      isValid: true,
    },
    description: {
      value: updatedValue ? updatedValue.description.toString() : '',
      isValid: true,
    },
  });

  function changeInputHandler(inputIdentifier, enteredValue) {
    setInputs(currentInput => {
      return {
        ...currentInput,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: moment(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = !isNaN(expenseData.date);
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs(currentTnput => {
        return {
          amount: {value: currentTnput.amount.value, isValid: amountIsValid},
          date: {value: currentTnput.date.value, isValid: dateIsValid},
          description: {
            value: currentTnput.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const isValidHandler =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.stylingTitle}>Your Expenses</Text>
      <View style={styles.childContainer}>
        <Input
          label={'Amount'}
          invalid={!inputs.amount.isValid}
          style={styles.rowInput}
          textInputProperties={{
            keyboardType: 'decimal-pad',
            onChangeText: changeInputHandler.bind(this, 'amount'),
            value: inputs.amount.value,
            returnKeyType: 'done',
          }}
        />
        <Input
          label={'Date'}
          style={styles.rowInput}
          invalid={!inputs.date.isValid}
          textInputProperties={{
            maxLength: 10,
            placeholder: 'YYYY-MM-DD',
            onChangeText: changeInputHandler.bind(this, 'date'),
            value: inputs.date.value,
            returnKeyType: 'done',
          }}
        />
      </View>

      <Input
        label={'Description'}
        invalid={!inputs.description.isValid}
        textInputProperties={{
          multiline: true,
          onChangeText: changeInputHandler.bind(this, 'description'),
          value: inputs.description.value,
          onSubmitEditing: Keyboard.dismiss,
        }}
      />

      {isValidHandler && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <CustomButton style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </CustomButton>
        <CustomButton style={styles.button} onPress={submitHandler}>
          {editing ? 'Update' : 'Add'}
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childContainer: {
    flexDirection: 'row',
  },

  rowInput: {
    flex: 1,
  },

  rootContainer: {
    marginTop: screenHeight / 9,
  },

  stylingTitle: {
    textAlign: 'center',
    marginBottom: 33,
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.redPink,
    //textDecorationLine: 'underline',
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

  errorText: {
    textAlign: 'center',
    color: Colors.error500,
    margin: 8,
  },
});

export default ExpenseForm;
