import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import Cart from '../../components/cart/component';
import Rating from '../../components/rating/component';
import Swiper from '../../components/swiper/component';
import TextComponent from '../../components/text/component';
import Wrapper from '../../components/wrapper /component';
import ProductsService from '../../services/product/service';
import { RootState } from '../../store/provider';
import { black, primary } from '../../theme/colors';
import { font } from '../../theme/fonts';
import { text } from '../../theme/size';
import { spacing } from '../../theme/spacing';

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
  const product = productsObj.products.find((item:any) => item.id === id);

  useEffect(() => {
    setLoading(true);
    productSvc.getProduct(id).finally(() => setLoading(false));
  }, []);

  return (
    <Wrapper
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
          size={text.value(50)}>
          {product?.title}
        </TextComponent>
        <Rating rating={product.rating} review={133} />
      </View>
      <Swiper
        images={product?.images}
        />
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
    // flex: 1,
    // backgroundColor: 'red',
    paddingHorizontal: spacing[20],
  },
});

export default ProductScreen;
