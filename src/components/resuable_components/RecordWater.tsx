import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {COLORS} from '../../styles/Colors';
import BottleIcon from '../svgIcons/BottleIcon';
import CheckBoxCom from './auth/CheckBox';

interface Props {
  miliLiter: string;
  recordTime: string;
}

const RecordWater = ({miliLiter, recordTime}: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: horizontalScale(18),
        paddingTop: verticalScale(18),
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <BottleIcon />
        <Text
          style={{
            color: COLORS.primaryColor,
            fontWeight: '800',
            fontSize: moderateScale(15),
            paddingLeft: verticalScale(24),
          }}>
          {miliLiter}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: COLORS.primaryColor,
            fontWeight: 'bold',
            fontSize: moderateScale(14),
          }}>
          {recordTime}
        </Text>
        <CheckBoxCom setChecked={setChecked} checked={checked} unCheckedColor={COLORS.secondaryColor} checkedColor={COLORS.darkBlueColor}/>
      </View>
    </View>
  );
};

export default RecordWater;

const styles = StyleSheet.create({});
