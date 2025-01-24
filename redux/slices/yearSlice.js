import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedYear: ''
}

export const yearSlice = createSlice({
    name: 'year slice',
    initialState,
    reducers: {
        changeSelectedYear: (state, action) => {
            state.selectedYear = action.payload
        }
    }
})