import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {gray, primary} from '../../theme/colors';
import {font} from '../../theme/fonts';
import {text} from '../../theme/size';
import {spacing} from '../../theme/spacing';
import TextComponent from '../text/component';

interface AppBarProps {
  title: string;
  rightIcon?: JSX.Element | any;
  leftIcon?: JSX.Element | any;
}

const AppBar = ({title, rightIcon, leftIcon}: AppBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        {leftIcon || (
          <Pressable style={styles.backBtn}>
            <MaterialIcons
              size={spacing[28]}
              name="chevron-left"
              color={primary[900]}
            />
          </Pressable>
        )}
        <TextComponent size={text.medium} style={styles.title}>
          {title}
        </TextComponent>
      </View>
      {rightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[16],
    paddingVertical: spacing[10],
    height : spacing.value(60)
  },
  backBtn: {
    height: spacing[40],
    width: spacing[40],
    borderRadius: spacing.value(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: gray[100],
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: font.Regular,
    marginLeft: spacing[14],
  },
});

export default AppBar;
