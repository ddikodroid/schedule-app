import axios from 'axios';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Screen} from '../../components';
import {colors, fonts} from '../../styles';
import HomeHeader from './home-header.component';
import HomeSection from './home-section.component';
import TodayCard from './today-card.component';

const HomeScreen = () => {
  const year = dayjs().year();
  const month = dayjs().format('YYYY-MM');
  const date = dayjs().format('YYYY-MM-DD');

  const [schedules, setSchedules] = useState([]);
  const todaySchedule = schedules?.[year]?.[month]?.[date];

  useEffect(() => {
    const getSchedules = async () => {
      try {
        const res = await axios.get(
          'https://gist.githubusercontent.com/ddikodroid/571f7a340bc5d33f22ece09b3af8738b/raw/a8b5aedc83be51afe088e7d8ccecd827bdcb1c41/schedule.json',
        );
        setSchedules(res.data);
      } catch (error) {
        console.log('[ERROR] on getting schedules: ', error);
      }
    };
    getSchedules();
  }, []);
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

      <HomeSection leftTitle="Next Schedule" rightTitle="See all">
        <Text>Working in progress</Text>
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
});
