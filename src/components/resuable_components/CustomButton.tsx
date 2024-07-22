import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/Colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

interface Props {
  children: React.ReactNode;
  onpress: () => void;
  extraStyle?: any;
}

const CustomButton = ({children, onpress, extraStyle}: Props) => {
  return (
    <View style={extraStyle}> 
      <TouchableOpacity activeOpacity={0.7} onPress={onpress} style={[styles.buttonStyle]}>
        <Text
          style={{
            color: '#FFF',
            fontSize: moderateScale(17),
            fontWeight: '800',
          }}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: COLORS.darkBlueColor,
    width: horizontalScale(330),
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(50),
    borderRadius: 8,
    alignSelf: 'center',
  },
});
