import dayjs from 'dayjs';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Screen, ScreenHeader, TimeInfo} from '../../components';
import DetailClock from './detail-clock.component';
import DetailSection from './detail-section.component';
import StoreInfo from './store-info.component';

const DetailScreen = ({route: {params}}) => {
  return (
    <Screen>
      <ScreenHeader title={dayjs(params.date).format('D MMMM YYYY')} />
      <ScrollView bounces={false}>
        <DetailSection title="Store">
          <StoreInfo {...params} />
        </DetailSection>
        <DetailSection title="Time Schedule">
          <TimeInfo startTime={params.startTime} endTime={params.endTime} />
        </DetailSection>
        <DetailSection title="Clock In">
          <DetailClock time={params.clockIn} />
        </DetailSection>
        <DetailSection title="Clock Out">
          <DetailClock time={params.clockOut} />
        </DetailSection>
      </ScrollView>
    </Screen>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
