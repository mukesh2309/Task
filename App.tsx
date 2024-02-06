import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store/provider';
import AppStackNavigation from './app/navigation';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <AppStackNavigation />
      </Provider>
    </React.Fragment>
  );
};

export default App;
