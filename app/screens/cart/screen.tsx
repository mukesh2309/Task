import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { spacing } from '../../theme/spacing';

const CartScreen = () => {
  return (
    <FlatList
         pagingEnabled
          data={[232, 23, 23, 2]}
          horizontal
          renderItem={() => {
            return (
              <View style={{
                backgroundColor :'red',
                height : spacing.value(200),
                width : spacing.value(200)
              }}>
                <Image style={{
                  width : spacing.value(200),
                  height : spacing.value(200)
                }} source={{uri: 'https://picsum.photos/200/300'}} />
              </View>
            );
          }}
        />
  )
}

export default CartScreen