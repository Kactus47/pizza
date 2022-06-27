import { configureStore } from '@reduxjs/toolkit';
import filters from './filterSlice';

export const store = configureStore({
  reducer: {
    filters
  },
})