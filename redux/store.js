import { configureStore } from '@reduxjs/toolkit'
import { sideBarSlice } from './slices/sideBarSlice'
import { facultySlice } from './slices/facultySlice'
import { documentSlice } from './slices/documentSlice'
import { loginSlice } from './slices/auth/loginSlice'

const store = configureStore({
    reducer: {
        sideBar: sideBarSlice.reducer,
        faculty: facultySlice.reducer,
        document: documentSlice.reducer,
        user: loginSlice.reducer,
    },
})

export default store
