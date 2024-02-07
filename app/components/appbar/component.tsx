import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {primary} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import TextComponent from '../text/component';

interface AppBarProps {
  title: string;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
}

const AppBar = ({title, rightIcon, leftIcon}: AppBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Pressable style={styles.backBtn}>
          <Ionicons size={spacing[18]} name="arrow-back" color={primary[900]} />
        </Pressable>
        <TextComponent>Title</TextComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing[16],
    backgroundColor: 'red',
  },
  backBtn: {
    padding: spacing[8],
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AppBar;
