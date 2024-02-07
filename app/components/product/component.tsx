import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { black, gray } from '../../theme/colors';
import { text } from '../../theme/size';
import { spacing } from '../../theme/spacing';
import { trunCateStringWith3Dots } from '../../utils/truncateWithThreeDots';
import CartBtn from '../cartBtn/component';
import LikeBtn from '../like/component';
import TextComponent from '../text/component';

interface IProductsProps {
  image: string;
  key: number;
  price: string;
  title: string;
  onPress : () => void;
  onCartPress : (e:any) => void;
}

const ProductComponent = ({image, key, price, title,onPress,onCartPress}: IProductsProps) => {
  return (
    <Pressable onPress={onPress} key={key} style={styles.container}>
      <LikeBtn/>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.productPrice}>
        <View>
          <TextComponent color={black[900]}>{price}</TextComponent>
          <TextComponent size={text.base} color={black[500]}>
            {trunCateStringWith3Dots(title, 16)}
          </TextComponent>
        </View>
        <CartBtn onPress={onCartPress} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: spacing.value(220),
    maxWidth: spacing.value(160),
    borderRadius: spacing[12],
    justifyContent: 'space-between',
    backgroundColor: gray[100],
    marginTop: spacing[20],
  },
  image: {
    height: spacing.value(160),
    width: spacing.value(160),
    borderTopLeftRadius: spacing[12],
    borderTopRightRadius: spacing[12],
  },
  productPrice: {
    height: spacing.value(50),
    paddingHorizontal: spacing[8],
    paddingVertical: spacing[4],
    marginBottom: spacing[4],
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductComponent;
