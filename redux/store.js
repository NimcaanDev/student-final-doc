import { configureStore } from '@reduxjs/toolkit'
import { sideBarSlice } from './slices/sideBarSlice'
import { facultySlice } from './slices/facultySlice'

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice.reducer,
    faculty: facultySlice.reducer,
  },
})

export default store
