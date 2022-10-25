import axios from 'axios';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Screen} from '../../components';
import {colors, fonts} from '../../styles';
import HomeHeader from './home-header.component';
import HomeSection from './home-section.component';
import TodayCard from './today-card.component';
import NextScheduleCard from './next-schedule-card.component';
import {SCHEDULE_URL} from '../../constants/url';

const HomeScreen = () => {
  const year = dayjs().year();
  const month = dayjs().format('YYYY-MM');
  const date = dayjs().format('YYYY-MM-DD');
  const currentDate = dayjs().date();

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [schedules, setSchedules] = useState([]);
  const [nextSchedules, setNextSchedules] = useState([]);
  const todaySchedule = schedules?.[year]?.[month]?.[date];

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
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scrollContentContainer}>
        <View>
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
        </View>
        <View style={[styles.buttonContainer, {marginBottom: insets.bottom}]}>
          <Button
            title="Clock In"
            type="primary"
            containerStyle={styles.clockIn}
          />
          <Button
            title="Clock Out"
            type="secondary"
            disabled
            containerStyle={styles.clockOut}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
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
  buttonContainer: {
    marginTop: 32,
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  clockIn: {
    marginEnd: 6,
  },
  clockOut: {
    marginStart: 6,
  },
});
