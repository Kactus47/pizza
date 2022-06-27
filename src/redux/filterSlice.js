import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности desc',
    type: 'rating',
    sort: 'desc'
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId (state, id) {
      state.categoryId = id.payload;
    },
    setSort(state, obj) {
      state.sort = {...obj.payload}
    }
  }
});



export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;