import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton = ({name, size, color, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.bottonContainer}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bottonContainer: {
    borderRadius: 24,
    padding: 6,
  },

  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;
