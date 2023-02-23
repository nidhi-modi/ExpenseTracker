/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

import MainStackNavigator from './navigation/MainStackNavigator';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <MainStackNavigator />
    </>
  );
}

export default App;
