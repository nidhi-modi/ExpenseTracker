import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Colors.primary700} />
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
});

export default LoadingOverlay;
