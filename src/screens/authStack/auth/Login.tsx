// libraries imports
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {useState} from 'react';
// components imports
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics';
import {COLORS} from '../../../styles/Colors';
import CustomInput from '../../../components/resuable_components/CustomInput';
import CheckBoxCom from '../../../components/resuable_components/auth/CheckBox';
import CustomButton from '../../../components/resuable_components/CustomButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParams} from '../../../interfaces';
import SocialIcon from '../../../components/Icons/SocialIcon';

const Login = () => {
  // dimentions
  const {width, height} = Dimensions.get('screen');
  //  states
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isChecked, setChecked] = useState(false);
  //   i will use formik library for form and textInput handling But right now, I am using states.
  const [textEmail, setTextEmail] = useState('');
  const [textPassword, setTextPassword] = useState('');

  const navigation = useNavigation<NavigationProp<AuthStackParams>>();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAvoidingView behavior="padding">
        <StatusBar backgroundColor={'#FFF'} />
        <View style={{paddingTop: horizontalScale(18)}}>
          {/* top content with image */}
          <Text style={styles.wellcomeText}>Hi, Welcome to AquaMonitor</Text>
          <View style={{paddingTop: verticalScale(10)}}>
            <Image
              style={[
                styles.manKey,
                {
                  width: width / 1.2,
                  height: height / 4,
                },
              ]}
              source={require('../../../assets/images/manKey.png')}
            />
          </View>

          {/* textInput content start  */}

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 12,
            }}>
            <CustomInput
              label="Email*"
              value={textEmail}
              placeholder="Enter Your Email"
              setText={setTextEmail}
            />
            <CustomInput
              label="Password*"
              value={textPassword}
              placeholder="Enter Your Password"
              setText={setTextPassword}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              alignSelf: 'center',
              width: horizontalScale(340),
              paddingTop: verticalScale(8),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CheckBoxCom
                setChecked={setChecked}
                checked={isChecked}
                checkedColor={COLORS.primaryColor}
                unCheckedColor={COLORS.secondaryColor}
              />
              
              <Text style={{color: COLORS.primaryColor, fontWeight: '500'}}>
                Remember
              </Text>
            </View>

            <TouchableOpacity>
              <Text style={{color: COLORS.primaryColor, fontWeight: '600'}}>
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <CustomButton
              children="Log in"
              onpress={() => navigation.navigate('YourGender')}
              extraStyle={{paddingTop: verticalScale(20)}}
            />

            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: COLORS.secondaryColor,
                  height: 1,
                  width: horizontalScale(120),
                }}
              />
              <Text
                style={{
                  color: COLORS.primaryColor,
                  fontWeight: '600',
                  paddingHorizontal: 10,
                }}>
                Login with
              </Text>
              <View
                style={{
                  backgroundColor: COLORS.secondaryColor,
                  height: verticalScale(1),
                  width: horizontalScale(120),
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: horizontalScale(200),
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'center',
                paddingTop: verticalScale(40),
              }}>
              {/* <FaceBookIcon/> */}
              <SocialIcon
                imageSource={require('../../../assets/images/Facebook.png')}
              />
              <SocialIcon
                imageSource={require('../../../assets/images/Google.png')}
              />
              <SocialIcon
                imageSource={require('../../../assets/images/Instagram.png')}
              />
            </View>
          </View>

          {/* last content start */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  manKey: {
    alignSelf: 'center',
    resizeMode: 'center',
  },
  wellcomeText: {
    color: COLORS.primaryColor,
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    paddingLeft: horizontalScale(20),
  },
});

export default Login;
