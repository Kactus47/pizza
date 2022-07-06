import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  pizzas: [],
  status: 'loading', // loading | succes | error
}

// First, create the thunk
export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizza',
  async (params) => {
    const { categoryUrl, sortURL, search, pages } = params;
    const {data} = await axios.get(`https://62a86fadec36bf40bda5a999.mockapi.io/pizzas?${pages}${sortURL}${categoryUrl}${search}`);
    return data;
  }
)
const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.pizzas = action.payload
    }
  },
  extraReducers: {
    [fetchPizza.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPizza.fulfilled]: (state, action) => {
      state.pizzas = action.payload;
      state.status = 'succes';
    },
    [fetchPizza.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;