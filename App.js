import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoute} from './app/routes';

const App = () => {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  );
};

export default App;
