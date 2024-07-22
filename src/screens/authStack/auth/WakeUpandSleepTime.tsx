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
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, UnknownAction} from '@reduxjs/toolkit';
import {userLogin} from "../../../redux/slices/userSlice"

const WakeUpandSleepTime = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();
  const dispatch = useDispatch<Dispatch<UnknownAction>>();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar backgroundColor={'#FFF'} />
      <KeyboardAvoidingView behavior="padding">
        {/* top content */}
        <View style={styles.topContent}>
          <ArrowLeft onpress={() => navigation.goBack()} />
          <SkipButton />
        </View>
        {/* your gender info */}
        <View style={{paddingTop: verticalScale(40)}}>
          <Text style={styles.yourGender}>Wakeup and sleep Time</Text>
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
                imagePath={require('../../../assets/images/wakeupImage.png')}
                extraStyle={{
                  width: horizontalScale(100),
                  height: verticalScale(100),
                }}
              />
              <View style={styles.timesleep}>
                <Text
                  style={{
                    color: COLORS.primaryColor,
                    fontWeight: '800',
                  }}>
                  12:00 pm
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <GenderAvatar
                imagePath={require('../../../assets/images/sleeping_image.png')}
                extraStyle={{
                  width: horizontalScale(100),
                  height: verticalScale(100),
                }}
              />
              <View style={styles.timesleep}>
                <Text
                  style={{
                    color: COLORS.primaryColor,
                    fontWeight: '800',
                  }}>
                  02:00 am
                </Text>
              </View>
            </View>
          </View>

          <View style={{paddingTop: verticalScale(100)}}>
            <CustomButton
              onpress={() => dispatch(userLogin(true))}
              children="Next"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WakeUpandSleepTime;

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
  timesleep: {
    width: horizontalScale(115),
    height: verticalScale(48),
    backgroundColor: '#F8F8F8',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.secondaryColor,
    marginTop: verticalScale(22),
  },
});
