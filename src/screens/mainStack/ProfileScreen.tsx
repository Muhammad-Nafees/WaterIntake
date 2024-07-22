import React from 'react';
import {View, Text} from 'react-native';
import {moderateScale} from '../../utils/metrics';

const Profile = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: moderateScale(24),
          color: '#000',
          textAlign: 'center',
        }}>
        Profile Screen
      </Text>
    </View>
  );
};

export default Profile;
