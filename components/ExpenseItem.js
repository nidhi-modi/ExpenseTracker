import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const ExpenseItem = ({expenseData}) => {
  const navigation = useNavigation();

  function expressPressItemHandler() {
    navigation.navigate('ManageExpenses', {expenseId: expenseData.id});
  }

  return (
    <Pressable
      onPress={expressPressItemHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.mainContainer}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {expenseData.description}
          </Text>
          <Text style={styles.textBase}>
            {moment(expenseData.date).format('DD-MM-YYYY')}
          </Text>
        </View>

        <View style={styles.priceConatiner}>
          <Text style={styles.amount}>${expenseData.amount?.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary500,
    padding: 12,
    marginVertical: 8,
    borderRadius: 6,
    elevation: 3,
    shadowColor: Colors.gray500,
    shadowRadius: 4,
    shadowOpacity: 0.4,
    shadowOffset: {width: 1, height: 1},
  },

  textBase: {
    color: Colors.white,
  },

  description: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: 'bold',
    color: Colors.white,
  },

  priceConatiner: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 90,
    elevation: 3,
    shadowColor: Colors.gray500,
    shadowRadius: 4,
    shadowOpacity: 0.4,
    shadowOffset: {width: 1, height: 1},
  },

  amount: {
    color: Colors.primary500,
    fontWeight: 'bold',
  },
});

export default ExpenseItem;
