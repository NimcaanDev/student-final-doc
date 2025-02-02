import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../../src/constants/baseUrl'

const initialState = {
    singleIsLoading: false,
    singleError: '',
    singleData: {},
}

export const getSingleCourseFn = createAsyncThunk(
    'course/single',
    async (id, { rejectWithValue }) => {
        try {
            const result = await axios.post(`${baseUrl}courses/detail`, {
                id,
            })
            return result.data
        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong!')
        }
    }
)

export const getSingleCourseSlice = createSlice({
    name: 'singleCourse',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSingleCourseFn.pending, (state) => {
                state.singleIsLoading = true
                state.singleError = ''
                state.singleData = {}
            })
            .addCase(getSingleCourseFn.rejected, (state, action) => {
                state.singleIsLoading = false
                state.singleError = action.payload
                state.singleData = {}
            })
            .addCase(getSingleCourseFn.fulfilled, (state, action) => {
                state.singleIsLoading = false
                state.singleError = ''
                state.singleData = action.payload
            })
    },
})
