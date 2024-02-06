import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {spacing} from '../../theme/spacing';
import TextComponent from '../text/component';
import {black, gray} from '../../theme/colors';
import {text} from '../../theme/size';
import CartBtn from '../cartBtn/component';

const ProductComponent = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://picsum.photos/200'}} />
      <View style={styles.productPrice}>
        <View>
          <TextComponent color={black[900]}>$325</TextComponent>
          <TextComponent size={text.base} color={black[500]}>
            Clown Tang h03
          </TextComponent>
        </View>
        <CartBtn/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: spacing.value(220),
    maxWidth: spacing.value(160),
    borderRadius: spacing[12],
    justifyContent: 'space-between',
    backgroundColor : gray[100],
    marginTop : spacing[20]
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
    flexDirection :'row',
    justifyContent:'space-between'
  },
});

export default ProductComponent;
