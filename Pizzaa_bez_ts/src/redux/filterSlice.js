import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: 'популярности desc',
    type: 'rating',
    sort: 'desc'
  },
  page: 1
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId (state, id) {
      state.categoryId = id.payload;
    },
    setSearchValue (state, action){
      state.searchValue = action.payload;
    },
    setSort(state, obj) {
      state.sort = {...obj.payload}
    },
    setPage(state, action) {
        state.page = action.payload
    },
    setCurrentPage(state, action) {
      state.categoryId = action.payload.categoryId;
      state.sort = {...action.payload.sort};
      state.page = action.payload.page;
    } 
  }
});



export const { setCategoryId, setSort, setPage, setSearchValue, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;