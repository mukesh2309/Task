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
        products: action.payload.products.map((product: any) => ({
          ...product,
          isLiked: false,
        })),
      };
    },

    setProduct: (state, action) => {
      state.data.products = state.data.products.map((product: any) =>
        product.id === action.payload.id
          ? {...product, ...action.payload, isLiked: false}
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
    addToLike: (state, action) => {
      const {id} = action.payload;
      const likedProduct = state.data.products.find(
        (product: any) => product.id === id,
      );
      if (likedProduct) {
        likedProduct.isLiked = true;
      }
    },
    removeFromLike: (state, action) => {
      const {id} = action.payload;
      const likedProduct = state.data.products.find(
        (product: any) => product.id === id,
      );
      if (likedProduct) {
        likedProduct.isLiked = false;
      }
    },
    addQuantity: (state, action) => {
      const {id} = action.payload;
      const Product = state.cart.find(
        (product: any) => product.id === id,
      );
      if (Product) {
        Product.quantity += 1;
      }
    },
    removeQuantity: (state, action) => {
      const {id} = action.payload;
      const Product = state.cart.find(
        (product: any) => product.id === id,
      );
      if (Product) {
        Product.quantity -= 1;
      }
    },
  },
});

export const {
  setProduct,
  setProducts,
  addToCart,
  removeFromCart,
  addToLike,
  removeFromLike,
} = productSlice.actions;

export default productSlice.reducer;
