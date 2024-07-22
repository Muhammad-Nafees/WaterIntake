import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {} from '@react-navigation/stack';
import Login from '../screens/authStack/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import YourGender from '../screens/authStack/auth/YourGender';
import WakeUpandSleepTime from '../screens/authStack/auth/WakeUpandSleepTime';

const AuthStackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="YourGender" component={YourGender} />
          <Stack.Screen
            name="WakeUpandSleepTime"
            component={WakeUpandSleepTime}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AuthStackNavigation;
