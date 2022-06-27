import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    curentPage: 1
}

const pagerSlice = createSlice({
    name: 'pager',
    initialState,
    reducers: {
        changePage(state, pageNumber) {
            state.curentPage = pageNumber
        }
    }
});

export const { changePage } = pagerSlice.actions;

export default pagerSlice.reducer;
