import React from 'react';
import Wrapper from '../../components/wrapper /component';
import {black, primary} from '../../theme/colors';
import Cart from '../../components/cart/component';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import TextComponent from '../../components/text/component';
import {text} from '../../theme/size';
import {font} from '../../theme/fonts';
import {spacing} from '../../theme/spacing';
import Rating from '../../components/rating/component';
import Swiper from '../../components/swiper/component';
import {useNavigation} from '@react-navigation/native';

interface ProductScreenProps {
  route: {
    params: {
      id: number;
    };
  };
}
const ProductScreen = ({route}: ProductScreenProps) => {
  const navigation = useNavigation();
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
          Thin Choise
        </TextComponent>
        <TextComponent
          style={styles.title}
          color={black[900]}
          size={text.value(50)}>
          Top Orange
        </TextComponent>
        <Rating rating={4.5} review={133} />
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
    // flex: 1,
    // backgroundColor: 'red',
    paddingHorizontal: spacing[20],
  },
});

export default ProductScreen;
