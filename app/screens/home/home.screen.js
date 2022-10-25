import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Screen} from '../../components';
import HomeHeader from './home-header.component';
import HomeSection from './home-section.component';

const HomeScreen = () => {
  return (
    <Screen>
      <HomeHeader />
      <HomeSection leftTitle="Today's Schedule" rightTitle="Refresh">
        <Text>Working in progress</Text>
      </HomeSection>
      <HomeSection leftTitle="Next Schedule" rightTitle="See all">
        <Text>Working in progress</Text>
      </HomeSection>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
