import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import SideMenu from '~/components/SideMenu';

import AuthSignIn from '~/screens/AuthSignin';
import SignIn from '~/screens/SignIn';
import ForgotPassword from '~/screens/ForgotPassword';
import Services from '~/screens/Services';
import ServiceDetails from '~/screens/ServiceDetails';

const AuthNavigator = createStackNavigator(
  {
    AuthSignIn,
    SignIn,
    ForgotPassword,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const AppNavigator = createDrawerNavigator(
  {
    Services,
    ServiceDetails,
  },
  {
    gesturesEnabled: false,
    contentComponent: SideMenu,
  },
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: AppNavigator,
    },
    // {
    //   initialRouteName: isLogged ? 'App' : 'Auth',
    // },
  ),
);

export default Routes;
