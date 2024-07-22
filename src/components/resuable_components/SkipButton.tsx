import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import {COLORS} from '../../styles/Colors';

interface Props {
    onpress?: () => void;
  }

const SkipButton = ({onpress}:Props) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.containerStyle} activeOpacity={0.7}>
      <Text style={{color: COLORS.primaryColor, fontWeight: '700'}}>Skip</Text>
    </TouchableOpacity>
  );
};

export default SkipButton;

const styles = StyleSheet.create({
  containerStyle: {
    width: horizontalScale(72),
    height: verticalScale(30),
    backgroundColor: COLORS.secondaryColor,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
