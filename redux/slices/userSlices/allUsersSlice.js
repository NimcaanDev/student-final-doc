import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../../src/constants/baseUrl'

const initialState = {
    isLoading: false,
    error: '',
    data: {},
}

// Fetch all documents
export const getAllUsers = createAsyncThunk(
    'users/list',
    async (_, { rejectWithValue }) => {
        try {
            const result = await axios.get(`${baseUrl}users/get-users`)
            return result.data
        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong!')
        }
    }
)

export const allUsersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
                state.error = ''
                state.data = {}
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.isLoading = false
                state.data = {}
                state.error = action.payload
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.data = action.payload
            })
    },
})
