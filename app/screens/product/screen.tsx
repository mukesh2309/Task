import React from 'react';
import Wrapper from '../../components/wrapper /component';
import { primary } from '../../theme/colors';

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
      statusbar={{
        backgroundColor: primary[900],
        barStyle: 'light-content',
      }}>

      </Wrapper>
  );
};

export default ProductScreen;
