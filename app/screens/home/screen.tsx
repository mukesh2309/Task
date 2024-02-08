import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListComponent from '../../components/listComponent/component';
import ProductComponent from '../../components/product/component';
import TextComponent from '../../components/text/component';
import Wrapper from '../../components/wrapper /component';
import ProductsService from '../../services/product/service';
import {RootState} from '../../store/provider';
import {black, primary} from '../../theme/colors';
import {text} from '../../theme/size';
import {spacing} from '../../theme/spacing';
import HomeView from '../../views/home/view';
import {
  addToCart,
  addToLike,
  removeFromCart,
  removeFromLike,
} from '../../store/slices/product/slice';

const HomeScreen = ({navigation}: any) => {
  const productSvc = new ProductsService('products');
  const productsObj = useSelector((state: RootState) => state.products.data);
  const cart = useSelector((state: RootState) => state.products.cart);

  useEffect(() => {
    productSvc.getProducts();
  }, []);

  const dispatch = useDispatch();

  return (
    <Wrapper
      isLoading={productsObj.loading}
      statusbar={{
        backgroundColor: primary[900],
        barStyle: 'light-content',
      }}>
      <View style={style.container}>
        <ListComponent
          contentContainerStyle={style.flatList}
          ListHeaderComponent={
            <View style={style.header}>
              <HomeView
                user={{
                  name: 'Hey, Rahul',
                }}
                address={{
                  subTitle: 'DELIVERY TO',
                  title: 'Green Way 3000, Sylhet',
                }}
                time={{
                  subTitle: 'WITHIN',
                  title: '1 Hour',
                }}
              />
              <TextComponent
                size={text.x_xs}
                style={style.title}
                color={black[900]}>
                Recommended
              </TextComponent>
            </View>
          }
          data={productsObj.products}
          numColumns={2}
          renderItem={({item, index}: any) => {
            return <ProductComponent
            onLikePress={e => {
              !e
                ? dispatch(addToLike({id: item?.id}))
                : dispatch(removeFromLike({id: item?.id}));
            }}
            isLiked={item?.isLiked}
            onCartPress={e => {
              !e
                ? dispatch(addToCart({id: item?.id, quantity: 1}))
                : dispatch(removeFromCart({id: item?.id, quantity: 1}));
            }}
            onPress={() =>
              navigation.navigate('ProductScreen', {
                id: item?.id,
              })
            }
            price={item?.price}
            title={item?.title}
            image={item?.images[0]}
            key={item.id}
          />
          }}
        />
      </View>
    </Wrapper>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: spacing.value(90),
  },
  header: {
    marginHorizontal: -spacing.value(20),
  },
  title: {
    paddingTop: spacing[10],
    paddingHorizontal: spacing[20],
  },
  flatList: {
    paddingHorizontal: spacing[20],
  },
});
export default HomeScreen;
