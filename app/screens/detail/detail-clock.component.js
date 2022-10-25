import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {QR} from '../../assets/svgs';
import {colors, fonts} from '../../styles';

const DetailClock = ({time}) => {
  return (
    <View style={styles.container}>
      <QR />
      <Text style={styles.timeText}>{time != null ? time : '-- : --'}</Text>
    </View>
  );
};

export default DetailClock;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  timeText: {
    fontSize: 15,
    marginStart: 8,
    ...fonts.semiBold,
    color: colors.black,
  },
});
