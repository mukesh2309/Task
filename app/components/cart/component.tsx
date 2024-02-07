import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {black, secondary, white} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import TextComponent from '../text/component';
import {text} from '../../theme/size';

interface CartProps {
  onPress: () => void;
  count: number;
}

const Cart = ({onPress, count}: CartProps) => {
  return (
    <Pressable style={style.cart} onPress={onPress}>
      <Ionicons name="bag-outline" size={spacing[24]} color={black[900]} />
      {count && (
        <View style={style.badge}>
          <TextComponent size={text.base} color={white[900]}>
            {count}
          </TextComponent>
        </View>
      )}
    </Pressable>
  );
};

const style = StyleSheet.create({
  cart: {
    height: spacing[40],
    width: spacing[40],
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: secondary[900],
    height: spacing[22],
    width: spacing[22],
    borderRadius: spacing[12],
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cart;
