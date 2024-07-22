import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { horizontalScale, moderateScale, verticalScale } from '../../../utils/metrics';
import { WATER_SPLASHES } from '../../../constants';
import { COLORS } from '../../../styles/Colors';

const CircularIndicator = () => {

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: verticalScale(40),
            }}>
            <AnimatedCircularProgress
                size={200}
                // arcSweepAngle={360}
                width={8}
                childrenContainerStyle={{}}
                fill={60}
                backgroundWidth={3}
                tintTransparency={true}
                fillLineCap="round"
                lineCap='round'
                style={{ alignSelf: "center" }}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                renderCap={({ center }) => (
                    <Image
                        style={{
                            borderRadius: 100,
                            resizeMode: 'cover',
                            width: horizontalScale(190),
                            height: verticalScale(200),
                            alignSelf: 'center',
                            marginTop: verticalScale(8),
                        }}
                        source={WATER_SPLASHES}
                    />
                )}

                tintColor="#0197F6"
                backgroundColor={COLORS.secondaryColor}>
                {fill => (
                    <>
                        <View style={{ paddingBottom: verticalScale(80), justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#000000", fontWeight: "400", fontSize: moderateScale(16), }}>Today</Text>
                            <Text style={{ color: "#000000", fontWeight: "700", fontSize: moderateScale(22), }}>Drink Target</Text>
                            <Text style={{ color: COLORS.darkBlueColor, fontWeight: "900", fontSize: moderateScale(26), }}>{`${fill} ml`}</Text>
                        </View>
                    </>
                )}
            </AnimatedCircularProgress>

            {/* <Image
        style={{resizeMode: 'center', width: 100, height: 100}}
        source={require('../../../assets/images/water-splahes.png')}
      /> */}
        </View>
    );
};

export default CircularIndicator;

const styles = StyleSheet.create({});
