import React from 'react';
import { FlatList } from 'react-native';
import { listcomponent } from './type';


const ListComponent = ({
  data,
  renderItem,
  onEndReached,
  overScrollMode = 'always',
  numColumns = 1,
  onScroll
}: listcomponent) => {

  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      overScrollMode={overScrollMode}
      data={data}
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      numColumns={numColumns}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      onEndReached={onEndReached}
    />
  );
};

export default ListComponent;
