import { configureStore } from '@reduxjs/toolkit'
import { sideBarSlice } from './slices/sideBarSlice'
import { facultySlice } from './slices/facultySlice'
import { loginSlice } from './slices/auth/loginSlice'
import { documentSlice } from './slices/documentSlices/documentSlice'
import { getSingleDocumentSlice } from './slices/documentSlices/getSingleDocumentSlice'
import { uploadDocumentSlice } from './slices/documentSlices/uploadDocumentSlice'
import { courseSlice } from './slices/courseSlice'

const store = configureStore({
    reducer: {
        sideBar: sideBarSlice.reducer,
        faculty: facultySlice.reducer,
        course: courseSlice.reducer,
        document: documentSlice.reducer,
        singleDocument: getSingleDocumentSlice.reducer,
        uploadDocument: uploadDocumentSlice.reducer,
        user: loginSlice.reducer,
    },
})

export default store
