import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { gray, primary, white } from '../../theme/colors';
import { font } from '../../theme/fonts';
import { text } from '../../theme/size';
import { spacing } from '../../theme/spacing';

const tabBarOptions = (lable: string, focused: boolean) => {
  switch (lable) {
    case 'Home':
      return <AntDesign name="home" size={spacing[22]} color={primary[800]} />;
    case 'Categories':
      return (
        <MaterialCommunityIcons
          name="dots-grid"
          size={spacing[22]}
          color={primary[800]}
        />
      );
    case 'Favorite':
      return (
        <MaterialIcons
          name="favorite-border"
          size={spacing[22]}
          color={primary[800]}
        />
      );
    case 'More':
      return (
        <Entypo
          name="dots-three-vertical"
          size={spacing[20]}
          color={primary[800]}
        />
      );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white[900],
    flexDirection: 'row',
    borderRadius: spacing[30],
    paddingHorizontal: spacing[20],
    height: spacing.value(90),
    // paddingVertical: spacing[20],
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tab: {
    flex: 1 / 4,
    alignItems: 'center',
  },
  activeStyle: {
    backgroundColor: 'yellow',
    borderRadius: spacing.value(100),
    alignItems: 'center',
    justifyContent: 'center',
    height: spacing.value(100),
    width: spacing.value(100),
    borderWidth: spacing[8],
    borderColor: gray[100],
    marginBottom: spacing.value(40),
  },
});

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
            style={[styles.tab, isFocused && styles.activeStyle]}>
            {tabBarOptions(label, isFocused)}
            {!isFocused ? (
              <Text
                style={{
                  color: gray[500],
                  fontSize: text.base,
                  fontFamily: font.Medium,
                }}>
                {label}
              </Text>
            ) : null}
          </Pressable>
        );
      })}
    </View>
  );
};
