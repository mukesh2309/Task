import {createSlice} from '@reduxjs/toolkit';

export interface IProduct {
  data: Array<any>;
  loading: boolean;
  hasMore: boolean;
}

const initialState: IProduct = {
  data: [],
  loading: false,
  hasMore: true,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setProduct: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setLoading, setProduct, setProducts} = productSlice.actions;

export default productSlice.reducer;
