import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../styles';
import {Bell} from '../../assets/svgs';
import dayjs from 'dayjs';

const HomeHeader = ({userImage}) => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const getTime = () => setTime(dayjs());
    const id = setInterval(() => getTime(), 1000);
    return () => clearInterval(id);
  });
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          source={{uri: userImage}}
          defaultSource={require('../../assets/images/default-profile.jpeg')}
          style={styles.avatar}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LIVE ATTENDANCE</Text>
        </View>
        <Bell />
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{time.format('HH:mm')}</Text>
        <Text style={styles.dateText}>{time.format('dddd, D MMM YYYY')}</Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 48,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.yellow,
  },
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    ...fonts.condensedBold,
  },
  timeContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 72,
    ...fonts.bold,
    color: colors.black,
  },
  dateText: {
    fontSize: 14,
    ...fonts.medium,
    color: colors.black,
  },
});
