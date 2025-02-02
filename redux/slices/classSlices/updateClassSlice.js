import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../../src/constants/baseUrl'
import { DEFAULT_ERROR_MESSAGE } from '../../../src/constants/defaultErrorMessage'

const initialState = {
    isLoading: false,
    error: '',
    data: {},
}

export const updateClassFn = createAsyncThunk(
    'update/class',
    async (data, { rejectWithValue, getState }) => {
        const stateData = getState()
        const { token } = stateData?.user?.data
        try {
            const res = await axios.put(`${baseUrl}classes/update`, data, {
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

export const updateClassSlice = createSlice({
    name: 'updateClass',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(updateClassFn.pending, (state) => {
            state.isLoading = true
            state.error = ''
            state.data = {}
        })
        builder.addCase(updateClassFn.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
            state.data = {}
        })
        builder.addCase(updateClassFn.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        })
    },
})
