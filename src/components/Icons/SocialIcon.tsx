import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../utils/metrics';

interface Props {
  imageSource: any;
}
const SocialIcon = ({imageSource}: Props) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.7}>
        <Image style={styles.iconsStyle} source={imageSource} />
      </TouchableOpacity>
    </>
  );
};

export default SocialIcon;

const styles = StyleSheet.create({
  iconsStyle: {
    resizeMode: 'cover',
    width: horizontalScale(40),
    height: verticalScale(40),
  },
});
