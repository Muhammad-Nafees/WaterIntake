import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import CircularIndicator from '../../components/resuable_components/shared_component/CircularIndicator';
import DrawerIcon from '../../components/svgIcons/DrawerIcon';
import NotificationIcon from '../../components/svgIcons/NotificationIcon';
import {COLORS} from '../../styles/Colors';
import {BarChart} from 'react-native-gifted-charts';
import RecordWater from '../../components/resuable_components/RecordWater';
import BlueBottomArrow from '../../components/svgIcons/BlueBottomArrow';
import RightArrow from '../../components/svgIcons/RightArrow';

const DashBoard = () => {
  const data = [
    {
      value: 200,
      label: 'M',
      labelTextStyle: {color: '#000000'},
      frontColor: '#0188DD',
    },
    {
      value: 400,
      label: 'T',
      labelTextStyle: {color: '#000000'},
      frontColor: '#015B94',
    },
    {
      value: 145,
      label: 'W',
      labelTextStyle: {color: '#000000'},
      frontColor: '#B0DFFC',
    },
    {
      value: 520,
      label: 'T',
      labelTextStyle: {color: '#000000'},
      frontColor: '#00446F',
    },
    {
      value: 300,
      label: 'F',
      labelTextStyle: {color: '#000000'},
      frontColor: '#0197F6',
    },
    {
      value: 156,
      label: 'S',
      labelTextStyle: {color: '#000000'},
      frontColor: '#B0DFFC',
    },
    {
      value: 300,
      label: 'S',
      labelTextStyle: {color: '#000000'},
      frontColor: '#015B94',
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        {/* top content */}
        <View
          style={{
            paddingTop: horizontalScale(18),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <DrawerIcon />
          <Text
            style={{
              color: COLORS.primaryColor,
              fontWeight: '700',
              fontSize: moderateScale(18),
            }}>
            DashBoard
          </Text>
          <NotificationIcon />
        </View>
        {/* water intake progress */}
        <CircularIndicator />

        <View
          style={{
            // height: verticalScale(400),
            backgroundColor: '#FFFFFF',
            elevation: 5,
            borderRadius: 6,
            width: horizontalScale(340),
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: verticalScale(25),
            paddingTop: verticalScale(30),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: COLORS.primaryColor,
                fontWeight: '800',
                fontSize: moderateScale(22),
                paddingLeft: horizontalScale(18),
              }}>
              weekly Overview
            </Text>
            <BlueBottomArrow />
          </View>

          <Text style={styles.subText}>
            It is a long established fact that a reader will be distracted by
            the readable
          </Text>

          <BarChart
            data={data}
            dashGap={0}
            barBorderRadius={5}
            yAxisThickness={0}
            xAxisThickness={0}
            initialSpacing={0}
            hideRules
            hideYAxisText
            hideAxesAndRules
            spacing={14}
            barWidth={34}
            sideWidth={15}
            isAnimated
          />
          <View
            style={{
              width: horizontalScale(280),
              marginTop: verticalScale(16),
              height: 0.5,
              backgroundColor: COLORS.primaryColor,
              marginLeft: 16,
            }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              paddingBottom: verticalScale(35),
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingTop: verticalScale(18),
              }}>
              <View>
                <Text
                  style={{
                    color: COLORS.primaryColor,
                    fontSize: moderateScale(18),
                    fontWeight: '500',
                  }}>
                  Set Daily Reminder
                </Text>
                <Text
                  style={{
                    color: COLORS.primaryColor,
                    fontSize: moderateScale(14),
                    fontWeight: '400',
                    paddingTop: verticalScale(4),
                  }}>
                  Reminder after you reached daily limit
                </Text>
              </View>
              <RightArrow />
            </View>
            {/* <View style={{flexDirection:"row"}}>
           </View> */}
          </TouchableOpacity>
        </View>

        {/* chart start weekly overReview */}

        <View
          style={{
            paddingTop: verticalScale(60),
            paddingBottom: verticalScale(40),
          }}>
          <Text
            style={{
              color: COLORS.primaryColor,
              fontWeight: '700',
              fontSize: moderateScale(18),
              paddingLeft: verticalScale(18),
            }}>
            Today Record
          </Text>

          <RecordWater miliLiter="100ml" recordTime="08:35" />
          <RecordWater miliLiter="50ml" recordTime="06:00 pm" />
        </View>

        {/* <BarChart data = {data} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subText: {
    fontSize: moderateScale(14),
    color: COLORS.primaryColor,
    fontWeight: '500',
    paddingHorizontal: horizontalScale(18),
    paddingBottom: verticalScale(30),
    paddingTop: verticalScale(7),
  },
});

export default DashBoard;
