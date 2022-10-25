import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import {AppRoute} from './app/routes';
import {StatusBar} from 'react-native';
import {colors} from './app/styles';

const App = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <StatusBar backgroundColor={colors.yellow} barStyle="dark-content" />
      <AppRoute />
    </NavigationContainer>
  );
};

export default App;
