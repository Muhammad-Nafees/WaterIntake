// imports libraries
import {
  Image,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import DashBoard from '../screens/mainStack/DashboardScreen';
import Progress from '../screens/mainStack/ProgressScreen';
import Goal from '../screens/mainStack/GoalScreen';
import Profile from '../screens/mainStack/ProfileScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useReducer} from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {Path, Svg} from 'react-native-svg';
import {COLORS} from '../styles/Colors';
import {horizontalScale, verticalScale} from '../utils/metrics';

const Tab = createBottomTabNavigator();
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const BottomTabsNavigation = () => {
  return (
    <>
      <Tab.Navigator
        tabBar={props => <AnimatedTabBar {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="DashBoard"
          options={{
            // tabBarLabelPosition: 'below-icon',
            tabBarIcon: ({focused, color}) => (
              <Image
                style={{
                  tintColor: focused ? '#FFF' : COLORS.primaryColor,
                  width: horizontalScale(24),
                  height: verticalScale(24),
                  resizeMode: 'center',
                }}
                source={require('../assets/images/Home.png')}
              />
            ),
          }}
          component={DashBoard}
        />
        <Tab.Screen
          name="Progress"
          options={{
            // tabBarLabelPosition: 'below-icon',
            tabBarIcon: ({focused, color}) => (
              <Image
                style={{
                  tintColor: focused ? '#FFF' : COLORS.primaryColor,
                  width: horizontalScale(24),
                  height: verticalScale(24),
                  resizeMode: 'center',
                }}
                source={require('../assets/images/progress.png')}
              />
            ),
          }}
          component={Progress}
        />
        <Tab.Screen
          name="Goal"
          options={{
            // tabBarLabelPosition: 'below-icon',
            tabBarIcon: ({focused, color}) => (
              <Image
                style={{
                  tintColor: focused ? '#FFF' : COLORS.primaryColor,
                  width: horizontalScale(24),
                  height: verticalScale(24),
                  resizeMode: 'center',
                }}
                source={require('../assets/images/goal.png')}
              />
            ),
          }}
          component={Goal}
        />
        <Tab.Screen
          name="Profile"
          options={{
            // tabBarLabelPosition: 'below-icon',
            tabBarIcon: ({focused, color}) => (
              <Image
                style={{
                  tintColor: focused ? '#FFF' : COLORS.primaryColor,
                  width: horizontalScale(24),
                  height: verticalScale(24),
                  resizeMode: 'center',
                }}
                source={require('../assets/images/setting.png')}
              />
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
};

const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();

  const reducer = (state: any, action: {x: number; index: number}) => {
    return [...state, {x: action.x, index: action.index}];
  };

  const [layout, dispatch] = useReducer(reducer, []);
  console.log('🚀 ~ layout:', layout);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({x: event.nativeEvent.layout.x, index});
  };

  const xOffset = useDerivedValue(() => {
    if (layout.length !== routes.length) return 0;

    return [...layout].find(({index}) => index === activeIndex)!.x - 25;
  }, [activeIndex, layout]);

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(xOffset.value, {duration: 250})}],
    };
  });

  return (
    <>
      <View style={[styles.tabBar, {paddingBottom: bottom}]}>
        <AnimatedSvg
          width="99"
          height="52"
          viewBox="0 0 99 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={[styles.activeBackground, animationStyle]}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0C13.9208 0.0177808 15.7737 10.3927 17.8157 21.8264C20.3246 35.8737 23.1188 51.5192 48.9287 51.5192C74.5051 51.5192 77.3534 36.1556 79.9392 22.2081C82.0868 10.6247 84.0532 0.0179785 98.7075 0H0Z"
            fill="#EDEEEE"
          />
        </AnimatedSvg>

        <View style={styles.tabBarContainer}>
          {routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const tabBarIcon = options.tabBarIcon;

            return (
              <TabBarComponent
                key={route.key}
                onLayout={e => handleLayout(e, index)}
                onPress={() => navigation.navigate(route.name)}
                active={activeIndex === index}
                icon={
                  tabBarIcon &&
                  tabBarIcon({focused: activeIndex === index, color: ''})
                }
              />
            );
          })}
        </View>
      </View>
    </>
  );
};

type TabBarComponentProps = {
  active?: boolean;
  onPress: (e: any) => void;
  onLayout: (e: LayoutChangeEvent) => void;
  icon: React.ReactNode;
};

const TabBarComponent = ({
  onPress,
  onLayout,
  active,
  icon,
}: TabBarComponentProps) => {
  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, {duration: 250}),
        },
      ],
    };
  });

  const animatedIconContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, {duration: 250}),
    };
  });

  return (
    <>
    <Pressable onLayout={onLayout} onPress={onPress} style={styles.component}>
      <Animated.View
        style={[styles.componentCircle, animatedComponentCircleStyles]}
        />
      <Animated.View style={[styles.iconContainer, animatedIconContainerStyle]}>
        {icon}
      </Animated.View>
    </Pressable>
        </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFF',
    height: verticalScale(80),
  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    height: verticalScale(55),
    width: horizontalScale(55),
    marginTop: -5,
    marginRight: horizontalScale(10),
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: COLORS.darkBlueColor,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTabsNavigation;
