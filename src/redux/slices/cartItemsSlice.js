import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    // add todo
    addCartItem: (state, action) => {
      const findItem = state.cartItems.find(
        item => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );

      state.totalCount = state.cartItems.reduce(
        (acc, item) => acc + item.count,
        0
      );
    },
    // delete todo
    deleteCartItem: (state, action) => {
      const index = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );

      state.cartItems.splice(index, 1);

      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );

      state.totalCount = state.cartItems.reduce(
        (acc, item) => acc + item.count,
        0
      );
    },
    // clear todo
    clearCart: state => {
      state.cartItems = initialState.cartItems;
      state.totalCount = initialState.totalCount;
      state.totalPrice = initialState.totalPrice;
    },
    // increment count
    countIncrement: (state, action) => {
      const findItem = state.cartItems.find(item => item.id === action.payload);
      // need to check action.payload.id or action.payload in live page

      if (findItem) {
        findItem.count += 1;
      }

      state.totalCount = state.cartItems.reduce(
        (acc, item) => acc + item.count,
        0
      );

      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    // decrement count
    countDecrement: (state, action) => {
      const findItem = state.cartItems.find(item => item.id === action.payload);
      // need to check action.payload.id or action.payload in live page

      if (findItem) {
        findItem.count -= 1;
      }

      state.totalCount = state.cartItems.reduce(
        (acc, item) => acc + item.count,
        0
      );

      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
  },
});

export const {
  addCartItem,
  deleteCartItem,
  clearCart,
  countIncrement,
  countDecrement,
} = cartItemsSlice.actions;

export const cartItemsReducer = cartItemsSlice.reducer;
