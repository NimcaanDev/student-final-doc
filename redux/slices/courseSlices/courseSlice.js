import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DEFAULT_ERROR_MESSAGE } from '../../../src/constants/defaultErrorMessage'
import axios from 'axios'
import { baseUrl } from '../../../src/constants/baseUrl'

const initialState = {
    isLoading: false,
    error: '',
    data: {},
}

export const getAllCourses = createAsyncThunk(
    'course/list',
    async (_, { rejectWithValue }) => {
        try {
            const result = await axios.get(`${baseUrl}courses/all`)
            return result.data
        } catch (error) {
            return rejectWithValue(error.message || DEFAULT_ERROR_MESSAGE)
        }
    }
)

export const courseSlice = createSlice({
    name: 'course slice',
    initialState,
    extraReducers(builder) {
        builder.addCase(getAllCourses.pending, (state) => {
            ;(state.isLoading = true), (state.error = ''), (state.data = {})
        })
        builder.addCase(getAllCourses.rejected, (state, action) => {
            ;(state.isLoading = false),
                (state.error = action.payload),
                (state.data = {})
        })
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            ;(state.isLoading = false),
                (state.error = ''),
                (state.data = action.payload)
        })
    },
})
