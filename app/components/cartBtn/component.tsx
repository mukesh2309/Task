import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {primary, white} from '../../theme/colors';
import {spacing} from '../../theme/spacing';

interface CardBtnProps {
  onPress?: (e:any) => any;
}
const CartBtn = ({onPress}: CardBtnProps) => {
  const [cart, setCart] = React.useState(false);
  const name = cart ? 'minus' : 'plus';

  const handleCart = () => {
    setCart(!cart);
    if (onPress) {
      onPress(cart);
    }
  };
  return (
    <Pressable onPress={handleCart} style={styles.container}>
      <AntDesign name={name} size={spacing[14]} color={white[900]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: spacing.value(24),
    width: spacing.value(24),
    backgroundColor: primary[900],
    borderRadius: spacing.value(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartBtn;
