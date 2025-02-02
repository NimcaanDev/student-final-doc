import { configureStore } from '@reduxjs/toolkit'
import { sideBarSlice } from './slices/sideBarSlice'
import { facultySlice } from './slices/facultySlice'
import { loginSlice } from './slices/auth/loginSlice'
import { documentSlice } from './slices/documentSlices/documentSlice'
import { getSingleDocumentSlice } from './slices/documentSlices/getSingleDocumentSlice'
import { uploadDocumentSlice } from './slices/documentSlices/uploadDocumentSlice'
import { courseSlice } from './slices/courseSlice'
import { getSingleClassSlice } from './slices/classSlices/getSingleClassSlice'
import { deleteClassSlice } from './slices/classSlices/deleteClassSlice'
import { updateDocumentSlice } from './slices/documentSlices/updateDocumentSlice'
import { deleteDocumentSlice } from './slices/documentSlices/deleteDocumentSlice'
import { deleteUserSlice } from './slices/userSlices/deleteUserSlice'
import { updateClassSlice } from './slices/classSlices/updateClassSlice'
import { classSlice } from './slices/classSlices/classSlice'
import { CreateCLassSLice } from './slices/classSlices/createClassSlice'

const store = configureStore({
    reducer: {
        sideBar: sideBarSlice.reducer,
        faculty: facultySlice.reducer,
        course: courseSlice.reducer,
        class: classSlice.reducer,
        singleClass: getSingleClassSlice.reducer,
        newClass: CreateCLassSLice.reducer,
        updateClass: updateClassSlice.reducer,
        deleteClass: deleteClassSlice.reducer,
        document: documentSlice.reducer,
        singleDocument: getSingleDocumentSlice.reducer,
        uploadDocument: uploadDocumentSlice.reducer,
        updateDocument: updateDocumentSlice.reducer,
        deleteDocument: deleteDocumentSlice.reducer,
        user: loginSlice.reducer,
        deleteUser: deleteUserSlice.reducer,
    },
})

export default store
