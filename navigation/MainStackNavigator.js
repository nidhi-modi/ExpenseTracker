import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';

import AllExpenses from '../screens/AllExpenses';
import ManageExpenses from '../screens/ManageExpenses';
import RecentExpenses from '../screens/RecentExpenses';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from '../UI/IconButton';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import ExpensesContextProvider from '../redux/expenses-context';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: Colors.primary500,
        },
        tabBarStyle: {backgroundColor: Colors.white},
        tabBarActiveTintColor: Colors.redPink,
        headerTintColor: Colors.white,
        headerBackTitleVisible: true,
        headerRight: ({tintColor}) => (
          <IconButton
            name={'add'}
            size={28}
            color={tintColor}
            onPress={() => navigation.navigate('ManageExpenses')}
          />
        ),
      })}>
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent Expenses',
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <View style={styles.iconContainer}>
                <Ionicons
                  style={styles.iconStyle}
                  name={'hourglass'}
                  size={size}
                  color={color}
                />
              </View>
            ) : (
              <Ionicons
                style={styles.iconStyle}
                name={'hourglass'}
                size={size}
                color={color}
              />
            ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <View style={styles.iconContainer}>
                <Ionicons
                  style={styles.iconStyle}
                  name={'calendar'}
                  size={27}
                  color={color}
                />
              </View>
            ) : (
              <Ionicons
                style={styles.iconStyle}
                name={'calendar'}
                size={size}
                color={color}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ExpenseOverview"
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            cardStyle: {
              backgroundColor: Colors.background,
            },
            headerTintColor: Colors.white,
            headerBackTitleVisible: true,
            headerMode: 'float',
          }}>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpenses}
            options={{
              headerShown: false,
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },

  iconContainer: {
    borderTopWidth: 2,
    width: '100%',
    height: '100%',
    borderColor: Colors.redPink,
  },
});

export default MainStackNavigator;
