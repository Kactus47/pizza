import { configureStore } from '@reduxjs/toolkit';
import filters from './filterSlice';
import pager from './pagerSlice';
export const store = configureStore({
  reducer: {
    filters,
    pager
  },
})