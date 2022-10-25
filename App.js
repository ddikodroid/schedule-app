import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import {AppRoute} from './app/routes';

const App = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <AppRoute />
    </NavigationContainer>
  );
};

export default App;
