import axios from 'axios';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Refresh} from '../../assets/svgs';
import {Screen, ScreenHeader} from '../../components';
import {colors, fonts} from '../../styles';
import ScheduleCard from './schedule-card.component';
import {SCHEDULE_URL} from '../../constants/url';

const ListScreen = () => {
  const year = dayjs().year();
  const month = dayjs().format('YYYY-MM');

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [upcomingSchedule, setUpcomingSchedule] = useState([]);

  useEffect(() => {
    const getSchedules = async () => {
      try {
        const res = await axios.get(SCHEDULE_URL);

        const upcoming = Object.entries(res.data[year]?.[month]).reduce(
          (acc, [key, value]) => {
            return [...acc, {schedule: value, date: key}];
          },
          [],
        );
        setUpcomingSchedule(upcoming);
      } catch (error) {
        console.log('[ERROR] on getting schedules: ', error);
      }
    };
    getSchedules();
  }, []);

  const renderUpcomingSchedule = ({item}) => {
    return (
      <ScheduleCard
        noSchedule={item.schedule === null}
        date={item.date}
        {...item.schedule}
        onPress={() =>
          navigation.navigate('Detail', {
            date: item.date,
            ...{...item.schedule},
          })
        }
      />
    );
  };
  return (
    <Screen>
      <ScreenHeader title="Upcoming Schedule" RightButton={Refresh} />
      <FlatList
        data={upcomingSchedule}
        renderItem={renderUpcomingSchedule}
        ListHeaderComponent={
          <View style={styles.monthContainer}>
            <Text style={styles.monthText}>{dayjs().format('MMMM YYYY')}</Text>
          </View>
        }
        contentContainerStyle={{paddingBottom: insets.bottom}}
      />
    </Screen>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  monthContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  monthText: {
    fontSize: 20,
    color: colors.black,
    ...fonts.condensedBold,
    textTransform: 'uppercase',
  },
});
