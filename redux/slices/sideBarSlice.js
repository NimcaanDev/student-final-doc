import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isClosed: true
}

export const sideBarSlice = createSlice({
    name: 'sidebar slide',
    initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.isClosed = !state.isClosed
        }
    }
})

export const {toggleSideBar} = sideBarSlice.actions