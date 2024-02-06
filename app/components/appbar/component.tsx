import React from 'react';
import { Pressable, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { spacing } from '../../theme/spacing';
import { styles } from './style';
import { primary } from '../../theme/colors';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backBtn}>
        <Ionicons size={spacing[18]} name="arrow-back" color={primary[900]} />
      </Pressable>
    </View>
  );
};

export default AppBar;
