import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const BlueBottomArrow = () => {
  return (
    <Svg
      width="16"
      height="12"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 9.32248L5.88675 4.32248L0.113249 4.32248L3 9.32248ZM2.5 2.18557e-08L2.5 4.82248L3.5 4.82248L3.5 -2.18557e-08L2.5 2.18557e-08Z"
        fill="#314CFF"
      />
    </Svg>
  );
};

export default BlueBottomArrow;

const styles = StyleSheet.create({});
