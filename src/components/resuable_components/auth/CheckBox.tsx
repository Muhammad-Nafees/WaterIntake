import {StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {Checkbox} from 'react-native-paper';
import {COLORS} from '../../../styles/Colors';

interface Props {
  setChecked:Dispatch<SetStateAction<boolean>>;
  checked: boolean;
  checkedColor:string
  unCheckedColor:string
}

const CheckBoxCom = ({setChecked, checked,checkedColor,unCheckedColor}: Props) => {
  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      uncheckedColor={unCheckedColor}
      color={checkedColor}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default CheckBoxCom;

const styles = StyleSheet.create({});
