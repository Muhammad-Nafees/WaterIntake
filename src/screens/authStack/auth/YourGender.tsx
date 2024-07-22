// librares imports
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
// components imports
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics';
import SkipButton from '../../../components/resuable_components/SkipButton';
import ArrowLeft from '../../../components/Icons/ArrowLeft';
import {COLORS} from '../../../styles/Colors';
import GenderAvatar from '../../../components/Icons/GenderAvatar';
import CustomButton from '../../../components/resuable_components/CustomButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParams} from '../../../interfaces';

const YourGender = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar backgroundColor={'#FFF'} />
      <KeyboardAvoidingView behavior="padding">
        {/* top content */}
        <View style={styles.topContent}>
          <ArrowLeft onpress={() => navigation.goBack()} />
          <SkipButton onpress={() => navigation.navigate("WakeUpandSleepTime")} />
        </View>
        {/* your gender info */}
        <View style={{paddingTop: verticalScale(40)}}>
          <Text style={styles.yourGender}>Your Gender</Text>
          <Text style={styles.subyourGenderinfo}>
            It is a long established fact that a reader will be distracted by
            the readable
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingTop: verticalScale(70),
            }}>
            <View style={{alignItems: 'center'}}>
              <GenderAvatar
                imagePath={require('../../../assets/images/male_avatar.png')}
              />
              <Text
                style={{
                  color: COLORS.primaryColor,
                  fontWeight: '800',
                  paddingTop: verticalScale(12),
                }}>
                Male
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <GenderAvatar
                imagePath={require('../../../assets/images/woman_avatar.png')}
              />
              <Text
                style={{
                  color: COLORS.primaryColor,
                  paddingTop: verticalScale(12),
                  fontWeight: '800',
                }}>
                Female
              </Text>
            </View>
          </View>

          <View style={{paddingTop: verticalScale(115)}}>
            <CustomButton
              onpress={() => navigation.navigate('WakeUpandSleepTime')}
              children="Next"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default YourGender;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: horizontalScale(330),
    alignSelf: 'center',
    paddingTop: horizontalScale(18),
  },
  yourGender: {
    color: COLORS.primaryColor,
    fontWeight: '800',
    fontSize: moderateScale(20),
    paddingVertical: 12,
    paddingLeft: horizontalScale(18),
  },
  subyourGenderinfo: {
    fontSize: moderateScale(14),
    color: COLORS.primaryColor,
    fontWeight: '500',
    paddingHorizontal: horizontalScale(18),
  },
});
