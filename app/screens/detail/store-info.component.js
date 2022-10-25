import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components';
import {colors, fonts} from '../../styles';

const StoreInfo = ({image, location, address}) => {
  return (
    <View style={styles.storeContainer}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.storeInfoContainer}>
        <Text style={styles.locationText}>{location}</Text>
        <Text style={styles.addressText} numberOfLines={2}>
          {address}
        </Text>
        <Button
          title="View on maps"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default StoreInfo;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  storeContainer: {
    flexDirection: 'row',
  },
  storeInfoContainer: {
    flex: 1,
    marginStart: 12,
  },
  locationText: {
    marginBottom: 6,
    ...fonts.bold,
    color: colors.black,
    fontSize: 18,
  },
  addressText: {
    fontSize: 13,
    lineHeight: 22,
    ...fonts.medium,
    color: colors.grey,
  },
  buttonContainer: {
    width: 120,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 6,
    borderColor: colors.red,
    backgroundColor: colors.lightGrey,
  },
  buttonText: {
    fontSize: 13,
    color: colors.red,
  },
});
