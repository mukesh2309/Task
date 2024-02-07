import React, {useEffect} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {black, red} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import {useFocusEffect} from '@react-navigation/native';

interface LikeBtnProps {
  onPress: (e: any) => void;
  style?: any;
  isLiked: boolean;
}

const LikeBtn = ({onPress, style, isLiked}: LikeBtnProps) => {
  const name = isLiked ? 'heart' : 'hearto';
  const color = isLiked ? red[800] : black[400];

  const styles = getStyles();

  const handleLike = () => {
    if (onPress) {
      onPress(isLiked);
    }
  };

  return (
    <Pressable onPress={handleLike} style={[styles.container, style]}>
      <AntDesign name={name} size={spacing[20]} color={color} />
    </Pressable>
  );
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      height: spacing.value(24),
      width: spacing.value(24),
      borderRadius: spacing.value(100),
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 999,
      left: spacing[6],
      top: spacing[6],
    },
  });

export default LikeBtn;
