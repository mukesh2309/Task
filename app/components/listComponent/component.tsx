import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import { listcomponent } from './type';
import { spacing } from '../../theme/spacing';


const ListComponent = ({
  data,
  renderItem,
  onEndReached,
  overScrollMode = 'always',
  numColumns = 1,
}: listcomponent) => {

  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      overScrollMode={overScrollMode}
      data={data}
      showsVerticalScrollIndicator={false}
      numColumns={numColumns}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      onEndReached={onEndReached}
    />
  );
};

export default ListComponent;
