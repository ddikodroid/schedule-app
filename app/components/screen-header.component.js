import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from '../assets/svgs';
import {colors, fonts} from '../styles';

const ScreenHeader = ({title, RightButton = null}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowLeft />
      </Pressable>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {RightButton != null ? (
        <Pressable>
          <RightButton />
        </Pressable>
      ) : null}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    backgroundColor: colors.yellow,
  },
  titleContainer: {
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    ...fonts.condensedBold,
    textTransform: 'uppercase',
  },
});
