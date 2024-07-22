import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigation from './BottomTabsNavigator';

const MainStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="BottomTabsNavigation"
            component={BottomTabsNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainStackNavigator;
