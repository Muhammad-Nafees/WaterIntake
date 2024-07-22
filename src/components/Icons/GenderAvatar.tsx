import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import {COLORS} from '../../styles/Colors';

interface Props {
  imagePath: any;
  extraStyle?:any
}
const GenderAvatar = ({imagePath,extraStyle}: Props) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.7}>
        <View
          style={{
            height: verticalScale(115),
            width: horizontalScale(120),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: COLORS.secondaryColor,
            borderRadius: 10,
            backgroundColor: '#F8F8F8',
          }}>
          <Image style={[styles.avatarStyle,extraStyle]} source={imagePath} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default GenderAvatar;

const styles = StyleSheet.create({
  avatarStyle: {
    resizeMode: 'center',
    width: horizontalScale(70),
    height: verticalScale(70),
  },
});