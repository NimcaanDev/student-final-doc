import { configureStore } from '@reduxjs/toolkit'
import { sideBarSlice } from './slices/sideBarSlice'
import { facultySlice } from './slices/facultySlice'
import { documentSlice } from './slices/documentSlice'

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice.reducer,
    faculty: facultySlice.reducer,
    document: documentSlice.reducer
  },
})

export default store
