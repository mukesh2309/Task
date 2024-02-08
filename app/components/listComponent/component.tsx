import React from 'react';
import {FlatList} from 'react-native';
import {listcomponent} from './type';

const ListComponent = ({
  data,
  renderItem,
  onEndReached,
  overScrollMode = 'always',
  numColumns = 1,
  onScroll,
  ListHeaderComponent,
  style,
  contentContainerStyle,
  isHorizontal = false
}: listcomponent) => {
  return (
    <FlatList
      style={style}
      horizontal={isHorizontal}
      contentContainerStyle={contentContainerStyle}
      ListHeaderComponent={ListHeaderComponent}
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
