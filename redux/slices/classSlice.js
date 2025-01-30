import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../src/constants/baseUrl'
import { DEFAULT_ERROR_MESSAGE } from '../../src/constants/defaultErrorMessage'

const initialState = {
    isLoading: false,
    error: '',
    data: {},
}

export const getAllClassesFn = createAsyncThunk(
    'classes/list',
    async (_, { rejectWithValue }) => {
        try {
            const result = await axios.get(`${baseUrl}classes/all`)
            return result.data
        } catch (error) {
            return rejectWithValue(error.message || DEFAULT_ERROR_MESSAGE)
        }
    }
)

export const classSlice = createSlice({
    name: 'classes slice',
    initialState,
    extraReducers(builder) {
        builder.addCase(getAllClassesFn.pending, (state) => {
            ;(state.isLoading = true), (state.error = ''), (state.data = {})
        })
        builder.addCase(getAllClassesFn.rejected, (state, action) => {
            ;(state.isLoading = false),
                (state.error = action.payload),
                (state.data = {})
        })
        builder.addCase(getAllClassesFn.fulfilled, (state, action) => {
            ;(state.isLoading = false),
                (state.error = ''),
                (state.data = action.payload)
        })
    },
})
