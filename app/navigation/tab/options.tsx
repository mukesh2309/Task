import React from 'react';
import { Pressable, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { black, secondary } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { styles } from './style';

const tabBarOptions = (lable: string, focused: boolean) => {
  switch (lable) {
    case 'Home':
      const Icon = !focused ? AntDesign : Entypo;
      return (
        <Icon
          name="home"
          size={spacing[24]}
          color={!focused ? black[600] : secondary[700]}
        />
      );
    case 'Categories':
      return (
        <MaterialCommunityIcons
          name="dots-grid"
          size={spacing[24]}
          color={!focused ? black[600] : secondary[700]}
        />
      );
    case 'Favorite':
      return (
        <MaterialIcons
          name={!focused ? 'favorite-border' : 'favorite'}
          color={!focused ? black[600] : secondary[700]}
          size={spacing[24]}
        />
      );
    case 'More':
      return (
        <Entypo
          name="dots-three-vertical"
          size={spacing[22]}
          color={!focused ? black[600] : secondary[700]}
        />
      );
  }
};

export const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabContainer]}>
            <View style={[styles.tab, isFocused && styles.activeStyle]}>
              {tabBarOptions(label, isFocused)}
              {!isFocused ? (
                <Text style={[styles.tabText]}>{label}</Text>
              ) : null}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};
