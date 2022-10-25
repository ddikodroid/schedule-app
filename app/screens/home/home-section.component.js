import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../styles';

const HomeSection = ({children, leftTitle, rightTitle, onPressRightTitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.leftTitle}>{leftTitle}</Text>
        <Text style={styles.rightTitle} onPress={onPressRightTitle}>
          {rightTitle}
        </Text>
      </View>
      {children}
    </View>
  );
};

export default HomeSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  titleContainer: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  leftTitle: {
    fontSize: 18,
    color: colors.black,
    ...fonts.condensedBold,
    textTransform: 'uppercase',
  },
  rightTitle: {
    fontSize: 14,
    ...fonts.medium,
    color: colors.red,
  },
});
