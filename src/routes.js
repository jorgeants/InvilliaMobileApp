import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import Welcome from '~/screens/Welcome';
import SocialLogin from '~/screens/SocialLogin';
import Places from '~/screens/Places';

const AuthNavigator = createStackNavigator(
  {
    Welcome,
    SocialLogin,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const AppNavigator = createStackNavigator({
  Places,
});

const Routes = createAppContainer(
  createSwitchNavigator({
    Auth: AuthNavigator,
    App: AppNavigator,
  })
);

export default Routes;
