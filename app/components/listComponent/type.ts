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
  onScroll : (e: any) => any;
  ListHeaderComponent: React.ReactNode | any;
  style : any;
  contentContainerStyle : any;
}
