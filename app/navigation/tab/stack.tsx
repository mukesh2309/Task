import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import HomeScreen from '../../screens/home/screen';
import { font } from '../../theme/fonts';
import { text } from '../../theme/size';
import { spacing } from '../../theme/spacing';
import {MyTabBar} from './options';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const navigationOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
  transitionSpec: {
    open: {animation: 'timing', config: {duration: 320}},
    close: {animation: 'timing', config: {duration: 320}},
  },
};

const getStyles = () =>
  StyleSheet.create({
    tabBarNavigation: {
      height: spacing.value(80),
      borderRadius: spacing.value(30),
      backgroundColor :'red'
    },
  });

const tabBarLabel = navigation => {
  console.log('navigation', navigation.name);
  return {
    fontFamily: font.Bold,
    marginBottom: spacing[10],
    fontSize: text.base,
  };
};

const TabScreen = () => {
  const styles = getStyles();
  return (
    <Tab.Navigator
    tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={HomeScreen} />
      <Tab.Screen
        name="More"
        options={({route}) => ({
          tabBarLabelStyle: tabBarLabel(route),
        })}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
