import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import Cart from '../../components/cart/component';
import Rating from '../../components/rating/component';
import Swiper from '../../components/swiper/component';
import TextComponent from '../../components/text/component';
import Wrapper from '../../components/wrapper /component';
import ProductsService from '../../services/product/service';
import {RootState} from '../../store/provider';
import {black, primary} from '../../theme/colors';
import {font} from '../../theme/fonts';
import {text} from '../../theme/size';
import {spacing} from '../../theme/spacing';
import {trunCateStringWith3Dots} from '../../utils/truncateWithThreeDots';
import PriceComponent from '../../components/price/component';
import Button from '../../components/button/component';

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

  useEffect(() => {
    setLoading(true);
    productSvc.getProduct(id).finally(() => setLoading(false));
  }, []);

  return (
    <Wrapper
      type="scroll"
      isLoading={false}
      isAppBar={true}
      appBar={{
        rightIcon: (
          <Cart
            count={10}
            onPress={() => {
              navigation.navigate('CartScreen');
            }}
          />
        ),
      }}
      statusbar={{backgroundColor: primary[900], barStyle: 'light-content'}}>
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
      <Swiper images={product?.images} />
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
          type="outlined"
          name="Add to Cart"
          onPress={() => {}}
          style={styles.btn}
        />
        <Button name="Buy Now" onPress={() => {}} style={styles.btn} />
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
    marginTop: -spacing[14],
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
