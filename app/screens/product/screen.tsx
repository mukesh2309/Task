import React from 'react';
import Wrapper from '../../components/wrapper /component';
import {primary} from '../../theme/colors';
import Cart from '../../components/cart/component';

interface ProductScreenProps {
  route: {
    params: {
      id: number;
    };
  };
}
const ProductScreen = ({route}: ProductScreenProps) => {
  return (
    <Wrapper
      isLoading={false}
      isAppBar={true}
      appBar={{
        rightIcon: (
          <Cart
            count={2}
            onPress={() => {console.log('cart')}}
          />
        ),
      }}
      statusbar={{
        backgroundColor: primary[900],
        barStyle: 'light-content',
      }}></Wrapper>
  );
};

export default ProductScreen;
