import React, {useEffect, useRef} from 'react';
import Wrapper from '../../components/wrapper /component';
import {black, primary} from '../../theme/colors';
import HomeView from '../../views/home/view';
import TextComponent from '../../components/text/component';
import {text} from '../../theme/size';
import {Animated, ScrollView, StyleSheet, View} from 'react-native';
import {spacing} from '../../theme/spacing';
import ProductComponent from '../../components/product/component';
import ListComponent from '../../components/listComponent/component';
import ProductsService from '../../services/product/service';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/provider';

const HomeScreen = () => {
  const productSvc = new ProductsService('products');

  const data: any = useSelector((state: RootState) => state.products.data);

  useEffect(() => {
    productSvc.getProducts();
  }, []);

  const scrollViewRef = useRef(null);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event.nativeEvent.layoutMeasurement.height;
    if (offsetY + layoutHeight >= contentHeight) {
    }
  };

  return (
    <Wrapper
      statusbar={{
        backgroundColor: primary[900],
        barStyle: 'light-content',
      }}>
      <ScrollView
        ref={scrollViewRef}
        bounces={false}
        overScrollMode='never'
        stickyHeaderIndices={[0]}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
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
            onEndReached={() => console.log('hi')}
            renderItem={({item, index}) => (
              <ProductComponent
                price={item?.price}
                title={item?.title}
                image={item?.images[0]}
                key={item.id}
              />
            )}
          />
        </View>
      </ScrollView>
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
    paddingTop : spacing[10]
  },
});
export default HomeScreen;
