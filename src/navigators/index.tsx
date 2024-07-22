import {useSelector} from 'react-redux';
import AuthStackNavigation from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';

const Routes = () => {
  const {login} = useSelector((state: any) => state.user);
  return <>{login ? <MainStackNavigator /> : <AuthStackNavigation />}</>;
};
export default Routes;