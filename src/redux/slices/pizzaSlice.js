import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas, fetchPizzasByCategory } from './pizza-operations';

const initialState = {
  items: [],
  allItems: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  extraReducers: builder => {
    builder
      // fetch pizzas by page
      .addCase(fetchPizzas.pending, handlePending)
      .addCase(fetchPizzas.rejected, handleRejected)
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      //  fetch all pizzas
      .addCase(fetchPizzasByCategory.pending, handlePending)
      .addCase(fetchPizzasByCategory.rejected, handleRejected)
      .addCase(fetchPizzasByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allItems = action.payload;
      });
  },
});

export const pizzasReducer = pizzasSlice.reducer;
