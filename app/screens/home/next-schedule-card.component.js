import dayjs from 'dayjs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TimeInfo} from '../../components';
import {colors, fonts} from '../../styles';

const NextScheduleCard = ({
  date,
  location,
  startTime,
  endTime,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.dayText}>{dayjs(date).format('dddd')}</Text>
      <Text style={styles.dateText}>{dayjs(date).format('D MMM')}</Text>
      <Text style={styles.locationText}>{location}</Text>
      <TimeInfo
        startTime={startTime}
        endTime={endTime}
        iconSize={18}
        textStyle={styles.timeText}
      />
    </View>
  );
};

export default NextScheduleCard;

const styles = StyleSheet.create({
  container: {
    marginEnd: 8,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.lightGrey,
  },
  dayText: {
    fontSize: 11,
    ...fonts.medium,
    color: colors.grey,
    textTransform: 'uppercase',
  },
  dateText: {
    fontSize: 24,
    ...fonts.bold,
    color: colors.black,
    marginBottom: 16,
  },
  locationText: {
    marginBottom: 6,
    ...fonts.semiBold,
    color: colors.black,
    fontSize: 13,
  },
  timeText: {
    fontSize: 12,
    marginStart: 8,
    ...fonts.regular,
    color: colors.black,
  },
});
