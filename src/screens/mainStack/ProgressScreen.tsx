import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../utils/metrics';
import CircularIndicator from '../../components/resuable_components/shared_component/CircularIndicator';
import DrawerIcon from '../../components/svgIcons/DrawerIcon';
import NotificationIcon from '../../components/svgIcons/NotificationIcon';
import {COLORS} from '../../styles/Colors';
import RecordWater from '../../components/resuable_components/RecordWater';

const Progress = () => {

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
            progress and statistics
          </Text>
          <NotificationIcon />
        </View>
        {/* water intake progress */}
        <CircularIndicator />
        {/* chart start weekly overReview */}

        <View style={{paddingBottom:verticalScale(40)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
              paddingTop: verticalScale(40),
            
            }}>
            <Text
              style={{
                color: COLORS.primaryColor,
                fontWeight: '700',
                fontSize: moderateScale(18),
              }}>
              Today Record
            </Text>
            <View>
              <Text style={{color: '#000', fontSize: moderateScale(17)}}>
                Completed
              </Text>
              <Text
                style={{
                  color: COLORS.darkBlueColor,
                  fontWeight: '900',
                  fontSize: moderateScale(16),
                  textAlign: 'center',
                }}>
                1500ml
              </Text>
            </View>
          </View>
          
          <RecordWater miliLiter='20ml' recordTime='08:35 pm'/>
          <RecordWater miliLiter='20ml' recordTime='08:35 pm'/>
          <RecordWater miliLiter='20ml' recordTime='08:35 pm'/>
          <RecordWater miliLiter='20ml' recordTime='08:35 pm'/>
          <RecordWater miliLiter='20ml' recordTime='08:35 pm'/>
          <RecordWater miliLiter='20ml' recordTime='08:35 pm'/>
          <RecordWater miliLiter='20ml' recordTime='08:35 pm'/>
          <RecordWater miliLiter='20ml' recordTime='08:35 pm'/>
          <RecordWater miliLiter='20ml' recordTime='08:35 pm'/>

          {/* 
          <View>
            <BottleIcon />
          </View> */}
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
});

export default Progress;
