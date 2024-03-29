import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Button from '../../components/button/component';
import ItemComponent from '../../components/item/component';
import TextComponent from '../../components/text/component';
import Wrapper from '../../components/wrapper/component';
import {black, gray, white} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/provider';
import {
  addQuantity,
  removeFromCart,
  removeQuantity,
} from '../../store/slices/product/slice';

interface list {
  id: number;
  name: string;
  price: number;
  img: string;
}
const CartScreen = () => {
  const cart = useSelector((state: RootState) => state.products.cart);
  const total = useSelector((state: RootState) => state.products.total);
  const cartCount = cart?.length?.toString();
  const dispatch = useDispatch();

  return (
    <Wrapper
      isLoading={false}
      isAppBar={true}
      appBar={{
        title: `Shopping Cart (${cartCount})`,
      }}
      statusbar={{
        backgroundColor: white[900],
        barStyle: 'dark-content',
      }}>
      <View style={styles.flatList}>
        <FlatList
          data={cart}
          renderItem={({item, index}: any) => {
            return (
              <ItemComponent
                incPress={() => {
                  dispatch(addQuantity({id: item?.id}));
                }}
                decPress={e => {
                  if (e === 1) {
                    dispatch(removeFromCart({id: item?.id}));
                  } else {
                    dispatch(removeQuantity({id: item?.id}));
                  }
                }}
                qty={item?.quantity}
                id={item?.id}
                name={item?.title}
                price={item?.price}
                img={item?.images?.[0]}
              />
            );
          }}
        />
      </View>
      <View style={styles.total}>
        <List name="Subtotal" price={total} />
        <List name="Delivery" price={0} />
        <List name="Total" price={total} />
      </View>
      <View style={styles.btn}>
        <Button name="Proceed To checkout" />
      </View>
    </Wrapper>
  );
};

const List = ({name, price}: list) => {
  return (
    <View style={styles.list}>
      <TextComponent color={black[100]}>{name}</TextComponent>
      <TextComponent color={black[900]}>${price}</TextComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: spacing[20],
    left: spacing[10],
    right: spacing[10],
  },
  flatList: {
    height: spacing.value(420),
  },
  total: {
    paddingBottom: spacing.value(100),
    position: 'absolute',
    bottom: 0,
    left: spacing[10],
    right: spacing[10],
    borderRadius: spacing[24],
    backgroundColor: gray[100],
    paddingHorizontal: spacing[24],
    paddingVertical: spacing[12],
  },
  list: {
    paddingVertical: spacing.value(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CartScreen;
