import {StatusBar, Platform} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../components/configs';

import Login from '../screens/auth/Login';
import Duedate from '../screens/Duedate';
import Home from '../screens/Home';
import Header from '../components/layouts/Header';
import MissedBills from '../screens/MissedBills';

const statusBarHeight =
  Platform.OS === 'android'
    ? StatusBar.currentHeight || (Platform.Version < 23 ? 25 : 33)
    : 0;

const AuthStack = createStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={ROUTES.LOGIN} component={Login} />
      <MainStack.Screen name={ROUTES.HOME} component={Home} />
      <MainStack.Screen name={ROUTES.DUE_DATE} component={Duedate} />
    </AuthStack.Navigator>
  );
};

const MainStack = createStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          paddingTop: statusBarHeight,
          height: 1 + statusBarHeight,
        },
      }}>
      <MainStack.Screen name={ROUTES.HOME} component={Home} />
      <MainStack.Screen
        name={ROUTES.DUE_DATE}
        component={Duedate}
        options={{presentation: 'modal'}}
      />
      <MainStack.Screen
        name={ROUTES.MISSBILL}
        component={MissedBills}
        options={{presentation: 'modal'}}
      />
    </MainStack.Navigator>
  );
};

export default () => {
  return (
    <>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </>
  );
};
