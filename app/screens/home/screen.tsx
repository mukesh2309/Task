import React from 'react';
import Wrapper from '../../components/wrapper /component';
import {black, primary} from '../../theme/colors';
import HomeView from '../../views/home/view';
import TextComponent from '../../components/text/component';
import {text} from '../../theme/size';
import {StyleSheet, View} from 'react-native';
import {spacing} from '../../theme/spacing';
import ProductComponent from '../../components/product/component';
import ListComponent from '../../components/listComponent/component';

const HomeScreen = () => {
  const handleSearch = (e: string) => {
    console.log('searching', e);
  };
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
        onSearch={handleSearch}
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
          data={[1, 2, 3,3,3,3,3,3]}
          numColumns={2}
          renderItem={ProductComponent}
          overScrollMode='never'
        />
      </View>
    </Wrapper>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing[20],
    paddingBottom : spacing.value(80)
  },
  title: {
    paddingVertical: spacing[20],
  },
});
export default HomeScreen;
