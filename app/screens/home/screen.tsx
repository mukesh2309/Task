import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
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

const HomeScreen = ({navigation}: any) => {
  const productSvc = new ProductsService('products');
  const productsObj = useSelector((state: RootState) => state.products.data);

  console.log(productsObj);

  useEffect(() => {
    productSvc.getProducts();
  }, []);

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
                onSearch={() => console.log('search')}
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
          onEndReached={() => console.log('hi')}
          renderItem={({item, index}: any) => (
            <ProductComponent
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
          )}
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
