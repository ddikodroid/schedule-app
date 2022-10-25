import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TimeInfo} from '../../components';
import {colors, fonts} from '../../styles';
import ClockComp from './clock.component';

const TodayCard = ({
  startTime,
  endTime,
  location,
  clockIn = null,
  clockOut = null,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>{location}</Text>
      <TimeInfo
        startTime={startTime}
        endTime={endTime}
        iconSize={18}
        textStyle={styles.timeText}
      />
      <View style={styles.clockContainer}>
        <ClockComp type="in" />
        <ClockComp type="out" />
      </View>
    </View>
  );
};

export default TodayCard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 16,
    backgroundColor: colors.lightGrey,
  },
  locationText: {
    marginBottom: 6,
    ...fonts.semiBold,
    color: colors.black,
    fontSize: 15,
  },
  timeText: {
    fontSize: 13,
    marginStart: 8,
    ...fonts.regular,
    color: colors.black,
  },
  clockContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    backgroundColor: colors.grey,
    height: 1,
    flex: 1,
  },
});
