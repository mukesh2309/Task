import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StackNavigationOptions
} from '@react-navigation/stack';
import React from 'react';
import TabScreen from './tab/stack';

export type SuperRootStackParamList = {
  UserAuthStack: undefined;
  RootStack: undefined;
  AppRootStack: undefined;
};
const AppStack = createNativeStackNavigator<SuperRootStackParamList>();

const AppStackNavigation = () => {

  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
    transitionSpec: {
      open: {animation: 'timing', config: {duration: 320}},
      close: {animation: 'timing', config: {duration: 320}},
    },
  };

  return (
    <NavigationContainer>
        <AppStack.Navigator
          initialRouteName={'RootStack'}
          screenOptions={navigationOptions}>
          <AppStack.Screen name="RootStack" component={TabScreen} />
        </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackNavigation;
