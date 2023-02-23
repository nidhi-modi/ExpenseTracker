import React from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';

const CustomButton = ({children, onPress, mode, style}) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressedBtn}>
        <View style={[styles.buttonStyle, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.headerBackground,
  },

  flat: {
    backgroundColor: Colors.cancel,
  },

  buttonText: {
    color: Colors.white,
    textAlign: 'center',
  },

  flatText: {
    color: Colors.white,
  },

  pressedBtn: {
    opacity: 0.75,
    backgroundColor: Colors.primary500,
    borderRadius: 4,
  },
});

export default CustomButton;
