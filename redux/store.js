import { configureStore } from "@reduxjs/toolkit";
import { sideBarSlice } from "./slices/sideBarSlice";

const store = configureStore({
    reducer: {
        sideBar: sideBarSlice.reducer
    }
})

export default store