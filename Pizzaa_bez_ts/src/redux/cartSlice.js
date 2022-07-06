import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalPizzaCount: 0,
  items: [],
} 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const findId = state.items.find((index) => index.id === action.payload.id);
      if(findId) {
        findId.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return (item.count * item.price) + sum;
      }, 0);
      state.totalPizzaCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
    },
    removeCart(state, action) {
      const findPizza = state.items.findIndex(pizza => pizza.id === action.payload);
      state.items.splice(findPizza, 1);
      state.totalPrice = state.items.reduce((sum, item) => {
        return (item.count * item.price) + sum;
      }, 0);
      state.totalPizzaCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
    },
    decrementItem(state, action) {
      const findId = state.items.find((index) => index.id === action.payload);
      if(findId) {
        findId.count--;
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return (item.count * item.price) + sum;
      }, 0);
      state.totalPizzaCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
    },
    clearCart(state) {
      state.totalPrice = 0;
      state.totalPizzaCount = 0;
      state.items = []; 
    }
  }
});

export const selectorCart = (state) => state.cart;
export const selectorCartPizzaId = (id) => (state) => state.cart.items.find(item => item.id === id) 

export const {addToCart, removeCart, clearCart, decrementItem} = cartSlice.actions;

export default cartSlice.reducer;