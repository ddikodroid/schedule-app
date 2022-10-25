import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Clock} from '../../assets/svgs';
import {colors, fonts} from '../../styles';
import ClockComp from './clock.component';

const TodayCard = ({start, end, location, clockIn = null, clockOut = null}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>{location}</Text>
      <View style={styles.timeContainer}>
        <Clock width={18} height={18} />
        <Text style={styles.timeText}>
          {start} - {end}
        </Text>
      </View>
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
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
