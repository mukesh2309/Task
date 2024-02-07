import {createSlice} from '@reduxjs/toolkit';

export interface IProduct {
  data: {
    products: any;
    loading: boolean;
  };
}

const initialState: IProduct = {
  data: {
    loading: true,
    products: [],
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = {
        ...action.payload,
        loading: false,
      };
    },
    setProduct: (state, action) => {
      state.data.products = state.data.products.map((product:any) =>
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      );
    },
    
  },
});

export const {setProduct, setProducts} = productSlice.actions;

export default productSlice.reducer;
