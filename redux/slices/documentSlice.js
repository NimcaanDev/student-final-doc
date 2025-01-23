import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../src/constants/baseUrl'

const initialState = {
    isLoading: false,
    error: '',
    data: {},
    singleIsLoading: false,
    singleError: '',
    singleData: {},
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

// Fetch a single document by ID
export const getSingleDocument = createAsyncThunk(
    'document/single',
    async (id, { rejectWithValue }) => {
        try {
            const result = await axios.post(`${baseUrl}documents/detail`, {
                id,
            })
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
            // Get all documents
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

            // Get a single document
            .addCase(getSingleDocument.pending, (state) => {
                state.singleIsLoading = true
                state.singleError = ''
                state.singleData = {}
            })
            .addCase(getSingleDocument.rejected, (state, action) => {
                state.singleIsLoading = false
                state.singleError = action.payload
                state.singleData = {}
            })
            .addCase(getSingleDocument.fulfilled, (state, action) => {
                state.singleIsLoading = false
                state.singleError = ''
                state.singleData = action.payload
            })
    },
})
