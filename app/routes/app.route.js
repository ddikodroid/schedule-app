import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailScreen, HomeScreen, ListScreen} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

const AppRoute = () => {
  return (
    <Navigator>
      <Screen component={HomeScreen} name="Home" />
      <Screen component={ListScreen} name="List" />
      <Screen component={DetailScreen} name="Detail" />
    </Navigator>
  );
};

export default AppRoute;
