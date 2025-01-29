import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../../src/constants/baseUrl'

const initialState = {
    isLoading: false,
    error: '',
    data: {},
}

// Fetch all documents
export const getDocuments = createAsyncThunk(
    'document/list',
    async (_, { rejectWithValue }) => {
        try {
            const result = await axios.get(`${baseUrl}documents/all`)
            return result.data
        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong!')
        }
    }
)

export const documentSlice = createSlice({
    name: 'document',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getDocuments.pending, (state) => {
                state.isLoading = true
                state.error = ''
                state.data = {}
            })
            .addCase(getDocuments.rejected, (state, action) => {
                state.isLoading = false
                state.data = {}
                state.error = action.payload
            })
            .addCase(getDocuments.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.data = action.payload
            })
    },
})
