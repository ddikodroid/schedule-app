import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../styles';

const Button = ({
  title,
  type,
  disabled = false,
  titleStyle,
  containerStyle,
}) => {
  return (
    <Pressable
      style={[
        styles.base,
        styles[type],
        disabled && styles.disabled,
        containerStyle,
      ]}>
      <Text style={[styles.titleText, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: colors.green,
  },
  secondary: {backgroundColor: colors.red},
  disabled: {
    backgroundColor: colors.grey,
  },
  titleText: {
    fontSize: 16,
    ...fonts.semiBold,
    color: colors.white,
  },
});
