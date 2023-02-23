import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const Input = ({label, style, invalid, textInputProperties}) => {
  const inputStyles = [styles.textInputStyle];

  if (textInputProperties && textInputProperties.multiline) {
    inputStyles.push(styles.multiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput {...textInputProperties} style={inputStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 10,
  },

  label: {
    fontSize: 14,
    marginBottom: 4,
    color: Colors.black,
  },

  textInputStyle: {
    padding: 8,
    fontSize: 15,
    borderRadius: 8,
    backgroundColor: Colors.white,
    color: Colors.white,
    color: Colors.redPink,
  },

  multiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },

  invalidLabel: {
    color: Colors.error500,
  },

  invalidInput: {
    backgroundColor: Colors.error50,
  },
});

export default Input;
