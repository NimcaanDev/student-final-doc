import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../../src/constants/baseUrl'
import { DEFAULT_ERROR_MESSAGE } from '../../../src/constants/defaultErrorMessage'

const initialState = {
    isLoading: false,
    error: '',
    data: {},
}

export const deleteCourseFn = createAsyncThunk(
    'delete/class',
    async (id, { rejectWithValue, getState }) => {
        const stateData = getState()
        const { token } = stateData?.user?.data
        try {
            const res = await axios.delete(`${baseUrl}courses/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            return res.data
        } catch (error) {
            return rejectWithValue(error.message || DEFAULT_ERROR_MESSAGE)
        }
    }
)

export const deleteCourseSlice = createSlice({
    name: 'deleteCourse',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(deleteCourseFn.pending, (state) => {
            state.isLoading = true
            state.error = ''
            state.data = {}
        })
        builder.addCase(deleteCourseFn.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
            state.data = {}
        })
        builder.addCase(deleteCourseFn.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        })
    },
})
