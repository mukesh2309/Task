import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { black, gray } from '../../theme/colors';
import { font } from '../../theme/fonts';
import { text } from '../../theme/size';
import { spacing } from '../../theme/spacing';
import TextComponent from '../text/component';

interface AppBarProps {
  title: string;
  rightIcon?: JSX.Element | any;
  leftIcon?: JSX.Element | any;
}

const AppBar = ({title, rightIcon, leftIcon}: AppBarProps) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        {leftIcon || (
          <Pressable onPress={()=>navigation.goBack()} style={styles.backBtn}>
            <MaterialIcons
              size={spacing[28]}
              name="chevron-left"
              color={black[900]}
            />
          </Pressable>
        )}
        <TextComponent size={text.large} color={black[900]} style={styles.title}>
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
    columnGap : spacing[8]
  },
  title: {
    fontFamily: font.Regular,
    marginLeft: spacing[14],
  },
});

export default AppBar;
