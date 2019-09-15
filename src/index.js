import '~/config/ReactotronConfig';

import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

// import KeepAwake from 'react-native-keep-awake';
// import store from './store';

import Routes from './routes';
import { setNavigator } from './services/navigation';

// import BackgroundLocation from '~/components/BackgroundLocation';

const App = () => (
  // <Provider store={store}>
  //   <BackgroundLocation />
  //   <Routes ref={setNavigator} />
  //   <KeepAwake />
  // </Provider>
  <Routes ref={setNavigator} />
);

export default App;
