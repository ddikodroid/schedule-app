import dayjs from 'dayjs';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Clock} from '../../assets/svgs';
import {colors, fonts} from '../../styles';

const ScheduleCard = ({
  noSchedule,
  isToday,
  date,
  location,
  startTime,
  endTime,
  onPress,
}) => {
  if (noSchedule) {
    return (
      <Pressable style={styles.container} disabled>
        <View style={styles.dateContainer}>
          <Text style={styles.dayNameText}>{dayjs(date).format('ddd')}</Text>
          <Text style={styles.dayNumberText}>{dayjs(date).format('D')}</Text>
        </View>
        <View style={styles.noScheduleContainer}>
          <Text style={styles.noScheduleText}>NO SCHEDULE</Text>
        </View>
      </Pressable>
    );
  }
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.dateContainer}>
        <Text style={styles.dayNameText}>{dayjs(date).format('ddd')}</Text>
        <Text
          style={[
            styles.dayNumberText,
            dayjs(date).day() === 0 && styles.sunday,
          ]}>
          {dayjs(date).format('D')}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.locationText}>{location}</Text>
        <View style={styles.timeContainer}>
          <Clock width={18} height={18} />
          <Text style={styles.timeText}>
            {startTime} - {endTime}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  dateContainer: {
    marginEnd: 16,
    alignItems: 'center',
  },
  dayNameText: {
    fontSize: 14,
    ...fonts.semiBold,
    color: colors.grey,
    textTransform: 'uppercase',
  },
  dayNumberText: {
    fontSize: 20,
    ...fonts.bold,
    color: colors.black,
  },
  sunday: {color: colors.red},
  noScheduleContainer: {
    flex: 1,
    height: 72,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: 'center',
    borderStyle: 'dashed',
    justifyContent: 'center',
    borderColor: colors.lightGrey,
  },
  noScheduleText: {
    ...fonts.semiBold,
    color: colors.black,
  },
  rightContainer: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.lightGrey,
  },
  locationText: {
    fontSize: 15,
    marginBottom: 10,
    ...fonts.semiBold,
    color: colors.black,
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
});
