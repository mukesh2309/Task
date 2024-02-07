import {createSlice} from '@reduxjs/toolkit';

export interface IProduct {
  data: {
    products: any;
    loading: boolean;
  };
  cart: [];
}

const initialState: IProduct = {
  data: {
    loading: true,
    products: [],
  },
  cart: [],
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
      state.data.products = state.data.products.map((product: any) =>
        product.id === action.payload.id
          ? {...product, ...action.payload}
          : product,
      );
    },
    addToCart: (state, action) => {
      const {id, quantity} = action.payload;
      const product = state.data.products.find(
        (product: any) => product.id === id,
      );
      if (product) {
        const cartItem = state.cart.find((item: any) => item.id === id);
        if (cartItem) {
          cartItem.quantity += quantity;
        } else {
          state.cart.push({...product, quantity});
        }
      }
    },
    removeFromCart: (state, action) => {
      const {id} = action.payload;
      const index = state.cart.findIndex((item: any) => item.id === id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const {setProduct, setProducts, addToCart, removeFromCart} =
  productSlice.actions;

export default productSlice.reducer;
