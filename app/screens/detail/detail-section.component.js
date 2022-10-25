import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../styles';

const DetailSection = ({title, children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

export default DetailSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 12,
    color: colors.black,
    ...fonts.condensedBold,
    textTransform: 'uppercase',
  },
  childrenContainer: {
    padding: 16,
    minHeight: 72,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
  },
});
