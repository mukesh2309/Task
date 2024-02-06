import React from 'react';
import { Pressable, Text, View } from 'react-native';
import {
  CategoryIcon,
  FavoriteIcon,
  HomeIcon,
  MoreIcon,
} from '../../assets/icons';
import { text } from '../../theme/size';
import {AntDesign} from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { spacing } from '../../theme/spacing';
import { primary } from '../../theme/colors';


const fillColorIfFocused = '#005EF4';
const fillColorIfNotFocused = '#000';

const tabBarOptions = (lable:string, focused:boolean) => {
  switch (lable) {
    case 'Home':
      return (
        <AntDesign
        name="home"
        size={spacing[20]}
        color={primary[800]}
      />
      );
    case 'Categories':
      return (
        <MaterialCommunityIcons
          fillColor={focused ? fillColorIfFocused : fillColorIfNotFocused}
        />
      );
    case 'Favorite':
      return (
        <FavoriteIcon
          fillColor={focused ? fillColorIfFocused : fillColorIfNotFocused}
        />
      );
    case 'More':
      return (
        <MoreIcon
          fillColor={focused ? fillColorIfFocused : fillColorIfNotFocused}
        />
      );
  }
};

function MyTabBar({state, descriptors, navigation}) {
  console.log('satte', state);
  return (
    <View style={{flexDirection: 'row'}}>
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

        console.log('isFocused', label);

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            {tabBarOptions(label,isFocused)}
            <Text
              style={{
                color: isFocused ? '#673ab7' : '#222',
                fontSize: text.large,
              }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export { MyTabBar };

