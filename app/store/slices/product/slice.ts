import {createSlice} from '@reduxjs/toolkit';

export interface IProduct {
  data: Array<any>;
  loading: boolean;
  hasMore: boolean;
}

const initialState: IProduct = {
  data: [],
  loading: true,
  hasMore: true,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
      state.loading = false
    },
    setProduct: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProduct, setProducts} = productSlice.actions;

export default productSlice.reducer;
