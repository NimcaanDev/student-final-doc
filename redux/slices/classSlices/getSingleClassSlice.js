import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseUrl } from '../../../src/constants/baseUrl'
import axios from 'axios'

const initialState = {
    singleIsLoading: false,
    singleError: '',
    singleData: {},
}

export const getSingleClassFn = createAsyncThunk(
    'class/single',
    async (id, { rejectWithValue }) => {
        try {
            const result = await axios.post(`${baseUrl}classes/detail`, {
                id,
            })
            return result.data
        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong!')
        }
    }
)

export const getSingleClassSlice = createSlice({
    name: 'singleClass',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSingleClassFn.pending, (state) => {
                state.singleIsLoading = true
                state.singleError = ''
                state.singleData = {}
            })
            .addCase(getSingleClassFn.rejected, (state, action) => {
                state.singleIsLoading = false
                state.singleError = action.payload
                state.singleData = {}
            })
            .addCase(getSingleClassFn.fulfilled, (state, action) => {
                state.singleIsLoading = false
                state.singleError = ''
                state.singleData = action.payload
            })
    },
})
