import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../utils/metrics';

interface Props {
  onpress: () => void;
}

const ArrowLeft = ({onpress}: Props) => {
  return (
    <>
      <TouchableOpacity onPress={onpress} activeOpacity={0.7}>
        <Image
          style={styles.iconsStyle}
          source={require('../../assets/images/arrow-left.png')}
        />
      </TouchableOpacity>
    </>
  );
};

export default ArrowLeft;

const styles = StyleSheet.create({
  iconsStyle: {
    resizeMode: 'cover',
    width: horizontalScale(25),
    height: verticalScale(25),
  },
});
