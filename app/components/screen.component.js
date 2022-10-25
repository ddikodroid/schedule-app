import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../styles';

const Screen = ({children}) => {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <View style={[styles.statusBar, {height: insets.top}]} />
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: colors.yellow,
  },
});
