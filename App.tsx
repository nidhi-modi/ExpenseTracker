/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Colors from './constants/Colors';

import MainStackNavigator from './navigation/MainStackNavigator';
import CustomStatusBar from './UI/CustomStatusBar';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor={Colors.primary500} />
      <MainStackNavigator />
    </SafeAreaProvider>
  );
}

export default App;
