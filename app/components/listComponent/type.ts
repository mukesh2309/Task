import {ListRenderItem} from 'react-native';

export interface listcomponent {
  data: [];
  renderItem: ListRenderItem<never> | null | undefined;
  initialNumToRender: number;
  maxToRenderPerBatch: number;
  windowSize: number;
  onEndReached: (e: any) => any;
  overScrollMode: 'auto' | 'always' | 'never';
  numColumns: number;
}
