import {StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {COLORS} from '../../styles/Colors';

interface Props {
  label: string;
  value: string;
  placeholder: string;
  setText: Dispatch<React.SetStateAction<string>>;
}
const CustomInput = ({label, value, placeholder, setText}: Props) => {
  const theme = {
    roundness: 8,
  };

  return (
    <View style={{paddingVertical: verticalScale(8)}}>
      <TextInput
        style={{
          backgroundColor: '#FFF',
          width: horizontalScale(330),
          fontSize: moderateScale(12),
          paddingLeft: 20,
        }}
        // style={[inputStyle, isFocused && styles.isFocused]}
        label={label}
        cursorColor="#000"
        placeholder={placeholder}
        keyboardType={'default'}
        outlineStyle={{borderColor: COLORS.primaryColor, borderWidth: 1,}}
        placeholderTextColor={COLORS.primaryColor}
        value={value}
        mode="outlined"
        theme={theme}
        activeOutlineColor={COLORS.primaryColor}
        selectionHandleColor={COLORS.secondaryColor}
        selectionColor={COLORS.secondaryColor}
        onChangeText={text => setText(text)}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
