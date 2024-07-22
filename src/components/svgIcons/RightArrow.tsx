import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const RightArrow = () => {
  return (
    <Svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.28846 0.837688L0.255127 1.87102L5.55513 7.17102L0.255127 12.471L1.28846 13.5044L7.58846 7.17102L1.28846 0.837688Z"
        fill="#717171"
      />
    </Svg>
  );
};

export default RightArrow;

const styles = StyleSheet.create({});
