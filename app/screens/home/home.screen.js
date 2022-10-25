import axios from 'axios';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../../components';
import {colors, fonts} from '../../styles';
import HomeHeader from './home-header.component';
import HomeSection from './home-section.component';
import TodayCard from './today-card.component';
import NextScheduleCard from './next-schedule-card.component';

const SCHEDULE_URL =
  'https://gist.githubusercontent.com/ddikodroid/571f7a340bc5d33f22ece09b3af8738b/raw/cd2511cc9adb0cb100feecb8055c2dbcde02dd1f/schedule.json';

const HomeScreen = () => {
  const year = dayjs().year();
  const month = dayjs().format('YYYY-MM');
  const date = dayjs().format('YYYY-MM-DD');
  const currentDate = dayjs().date();

  const navigation = useNavigation();

  const [schedules, setSchedules] = useState([]);
  const [nextSchedules, setNextSchedules] = useState([]);
  const todaySchedule = schedules?.[year]?.[month]?.[date];

  console.log(nextSchedules.length);

  useEffect(() => {
    const getSchedules = async () => {
      try {
        const res = await axios.get(SCHEDULE_URL);
        setSchedules(res.data);

        const upcoming = Object.entries(res.data[year]?.[month]).reduce(
          (acc, [key, value]) => {
            return [...acc, {schedule: value, date: key}];
          },
          [],
        );
        setNextSchedules(upcoming);
      } catch (error) {
        console.log('[ERROR] on getting schedules: ', error);
      }
    };
    getSchedules();
  }, []);

  const renderNextSchedule = ({item, index}) => {
    if (item.schedule !== null) {
      return <NextScheduleCard date={item.date} {...item.schedule} />;
    }
  };

  return (
    <Screen>
      <HomeHeader />
      <HomeSection leftTitle="Today's Schedule" rightTitle="Refresh">
        {todaySchedule != null ? (
          <TodayCard
            end={todaySchedule?.endTime}
            start={todaySchedule?.startTime}
            location={todaySchedule?.location}
          />
        ) : (
          <Text style={styles.emptyPlaceholder}>
            You don't have any schedule today.
          </Text>
        )}
      </HomeSection>

      <HomeSection
        leftTitle="Next Schedule"
        rightTitle="See all"
        onPressRightTitle={() => navigation.navigate('List')}>
        <FlatList
          horizontal
          data={nextSchedules.slice(currentDate)}
          renderItem={renderNextSchedule}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </HomeSection>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  emptyPlaceholder: {
    marginTop: 4,
    ...fonts.regular,
    alignSelf: 'center',
    color: colors.black,
  },
  flatListContent: {
    paddingEnd: 8,
    paddingStart: 16,
  },
});
