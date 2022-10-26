import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../styles';

const Clock = ({time = undefined, type}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.titleContainer,
          {backgroundColor: type === 'in' ? colors.green : colors.red},
        ]}>
        <Text style={[styles.titleText]}>
          {type === 'in' ? 'Clock in' : 'Clock out'}
        </Text>
      </View>
      <Text style={styles.timeText}>{time != null ? time : '-- : --'}</Text>
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  titleContainer: {
    width: 90,
    padding: 4,
    borderRadius: 4,
    marginBottom: 4,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 13,
    ...fonts.bold,
    color: colors.white,
    textTransform: 'uppercase',
  },
  timeText: {
    fontSize: 16,
    ...fonts.bold,
    color: colors.black,
  },
});
