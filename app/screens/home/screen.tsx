import React, {useEffect} from 'react';
import Wrapper from '../../components/wrapper /component';
import {black, primary} from '../../theme/colors';
import HomeView from '../../views/home/view';
import TextComponent from '../../components/text/component';
import {text} from '../../theme/size';
import {StyleSheet, View} from 'react-native';
import {spacing} from '../../theme/spacing';
import ProductComponent from '../../components/product/component';
import ListComponent from '../../components/listComponent/component';
import ProductsService from '../../services/product/service';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/provider';

const HomeScreen = () => {
  const productSvc = new ProductsService('products');

  const data:any = useSelector((state: RootState) => state.products.data);

  useEffect(() => {
    productSvc.getProducts();
  }, []);

  return (
    <Wrapper
      statusbar={{
        backgroundColor: primary[900],
        barStyle: 'light-content',
      }}>
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
      <View style={style.container}>
        <TextComponent size={text.xxl} style={style.title} color={black[900]}>
          Recommended
        </TextComponent>
        <ListComponent
          data={data.products}
          numColumns={2}
          renderItem={({item,index}:any)=><ProductComponent
          price={item?.price}
          title={item?.title}
          image={item?.images[0]}
          key={item.id}
          />}
          overScrollMode="never"
        />
      </View>
    </Wrapper>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing[20],
    paddingBottom: spacing.value(90),
  },
  title: {
    paddingVertical: spacing[20],
  },
});
export default HomeScreen;
