import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Clock} from '../assets/svgs';
import {colors, fonts} from '../styles';

const TimeInfo = ({startTime, endTime, iconSize = 24, textStyle}) => {
  return (
    <View style={styles.container}>
      <Clock width={iconSize} height={iconSize} />
      <Text style={[styles.timeText, textStyle]}>
        {startTime} - {endTime}
      </Text>
    </View>
  );
};

export default TimeInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 15,
    marginStart: 8,
    ...fonts.semiBold,
    color: colors.black,
  },
});
