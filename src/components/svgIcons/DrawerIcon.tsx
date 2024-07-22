import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {COLORS} from '../../styles/Colors';

const DrawerIcon = () => {
  return (
    <TouchableOpacity>
      <Svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="#5B5B5B">
        <Path
          d="M4 12H20"
          stroke="#5B5B5B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4 6H20"
          stroke="#5B5B5B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4 18H13"
          stroke="#5B5B5B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default DrawerIcon;

const styles = StyleSheet.create({});
