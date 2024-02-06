import {createSlice} from '@reduxjs/toolkit';

export interface ISearch {
  data: Array<any>;
  loading: boolean;
  hasMore: boolean;
}

const initialState: ISearch = {
  data: [],
  loading: false,
  hasMore: true,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSearchData: (state, action) => {
      let {offset, data} = action.payload;
      state.loading = false;
      data?.length < 5 ? (state.hasMore = false) : (state.hasMore = true);
      if (offset == 0) {
        state.data = data;
      } else {
        const existingIds = new Set(state.data.map(item => item.id));
        const uniqueData = data.filter(
          (item: any) => !existingIds.has(item.id),
        );
        state.data = [...state.data, ...uniqueData];
      }
    },
    initSearch: () => initialState,
  },
});

export const {setLoading, setSearchData, initSearch} = searchSlice.actions;

export default searchSlice.reducer;
