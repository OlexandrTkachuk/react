import { configureStore } from '@reduxjs/toolkit';
import { cartItemsReducer } from './slices/cartItemsSlice';
import { filterReducer } from './slices/filterSlice';
import { pizzasReducer } from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    filter: filterReducer,
    pizzas: pizzasReducer,
  },
});
