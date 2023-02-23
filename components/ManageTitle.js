import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';

const ManageTitle = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.childStyle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    padding: 18,
    alignItems: 'center',
  },
  childStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ManageTitle;
