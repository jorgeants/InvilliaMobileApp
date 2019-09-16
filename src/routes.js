import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '~/screens/Welcome';
import Places from '~/screens/Places';

const AuthNavigator = createStackNavigator(
  {
    Welcome,
  },
  {
    headerMode: 'none',
  }
);

const AppNavigator = createStackNavigator(
  {
    Places,
  },
  {
    headerMode: 'none',
  }
);

const Routes = createAppContainer(
  createSwitchNavigator({
    Auth: AuthNavigator,
    App: AppNavigator,
  })
);

export default Routes;
