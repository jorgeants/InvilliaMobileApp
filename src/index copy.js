import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import React from 'react';
import { Provider } from 'react-redux';

import KeepAwake from 'react-native-keep-awake';
import store from './store';

import Routes from './routes';
import { setNavigator } from './services/navigation';

import BackgroundLocation from '~/components/BackgroundLocation';

const App = () => (
  <Provider store={store}>
    <BackgroundLocation />
    <Routes ref={setNavigator} />
    <KeepAwake />
  </Provider>
);

export default App;
