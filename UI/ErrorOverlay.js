import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Colors from '../constants/Colors';

const ErrorOverlay = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.message]}>An error Occured</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: Colors.primaryBackground,
  },

  text: {
    textAlign: 'center',
    marginBottom: 8,
    color: Colors.error500,
  },

  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ErrorOverlay;
