import { configureStore } from '@reduxjs/toolkit';
import filters from './filterSlice';
import cart from './cartSlice';
import pizza from './pizzaSlice';

export const store = configureStore({
  reducer: {
    filters,
    cart,
    pizza
  },
})