import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/button/component';
import Cart from '../../components/cart/component';
import PriceComponent from '../../components/price/component';
import Rating from '../../components/rating/component';
import Swiper from '../../components/swiper/component';
import TextComponent from '../../components/text/component';
import Wrapper from '../../components/wrapper /component';
import ProductsService from '../../services/product/service';
import {RootState} from '../../store/provider';
import {black, white} from '../../theme/colors';
import {font} from '../../theme/fonts';
import {text} from '../../theme/size';
import {spacing} from '../../theme/spacing';
import {trunCateStringWith3Dots} from '../../utils/truncateWithThreeDots';
import {addToCart} from '../../store/slices/product/slice';

interface ProductScreenProps {
  route: {
    params: {
      id: number;
    };
  };
}
const ProductScreen = ({route}: ProductScreenProps) => {
  const navigation = useNavigation();
  const id = route.params.id;
  const productSvc = new ProductsService('products');
  const productsObj = useSelector((state: RootState) => state.products.data);
  const [loading, setLoading] = React.useState(true);
  const product = productsObj.products.find((item: any) => item.id === id);
  const cart = useSelector((state: RootState) => state.products.cart);
  const cartCount = cart?.length.toString() || '0';
  const isAdded = cart?.some((item: any) => item.id === id);
  const [add, setAdd] = useState(isAdded);

  useEffect(() => {
    setLoading(true);
    setAdd(isAdded);
    productSvc.getProduct(id).finally(() => setLoading(false));
  }, []);

  const dispatch = useDispatch();

  return (
    <Wrapper
      type="scroll"
      isLoading={false}
      isAppBar={true}
      appBar={{
        rightIcon: (
          <Cart
            count={cartCount}
            onPress={() => {
              navigation.navigate('CartScreen');
            }}
          />
        ),
      }}
      statusbar={{backgroundColor: white[900], barStyle: 'dark-content'}}>
      <View style={styles.header}>
        <TextComponent
          color={black[900]}
          font={font.Regular}
          size={text.value(40)}>
          {product?.brand}
        </TextComponent>
        <TextComponent
          style={styles.title}
          color={black[900]}
          size={text.value(35)}>
          {trunCateStringWith3Dots(product?.title, 20)}
        </TextComponent>
        <Rating rating={product.rating} review={133} />
      </View>
      <Swiper
        id={product?.id}
        images={product?.images}
        isLiked={product?.isLiked}
      />
      <View style={styles.price}>
        <PriceComponent size={text.value(20)} price={product?.price} />
        <PriceComponent
          price={product?.discountPercentage}
          name={'OFF'}
          type="discount"
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          disabled={add}
          type="outlined"
          name={add ? 'Added' : 'Add To Cart'}
          onPress={() => {
            setAdd(true);
            dispatch(addToCart({id: id, quantity: 1}));
          }}
        />
        <Button
          name="Buy Now"
          onPress={() => {
            navigation.navigate('CartScreen');
          }}
        />
      </View>
      <View style={styles.description}>
        <TextComponent
          color={black[900]}
          font={font.Regular}
          size={text.value(20)}>
          Details
        </TextComponent>
        <TextComponent
          color={black[100]}
          font={font.Regular}
          size={text.value(14)}>
          {product?.description}
        </TextComponent>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: -spacing[8],
    fontFamily: font.ExtraBold,
  },
  header: {
    paddingHorizontal: spacing[20],
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: spacing[20],
    paddingVertical: spacing[16],
    paddingHorizontal: spacing.value(14),
  },
  btnContainer: {
    paddingVertical: spacing.value(16),
    columnGap: spacing[22],
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[14],
  },
  description: {
    paddingHorizontal: spacing[14],
  },
});

export default ProductScreen;
