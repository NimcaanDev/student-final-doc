import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { baseUrl } from "../../src/constants/baseUrl";

const initialState = {
    isLoading: false,
    error: '',
    data: {}
}

export const getDocuments = createAsyncThunk('document/list',async (data, {rejectWithValue}) => {
    try {
        const result = await axios.get(`${baseUrl}/document/all`)

        return result.data
    } catch (error) {
        return rejectWithValue(error.message || 'Something went wrong!');
    }
})

export const documentSlice = createSlice({
    name: 'document slice',
    initialState,
    extraReducers (builder) {
        builder.addCase(getDocuments.pending, (state) => {
            state.isLoading = true,
            state.error = '',
            state.data = {}
        })
        builder.addCase(getDocuments.rejected, (state, action) => {
            state.isLoading = false,
            state.data = {},
            state.error = action.payload
        })
        builder.addCase(getDocuments.fulfilled, (state, action) => {
            state.isLoading = false,
            state.error = '',
            state.data = action.payload
        })
    }
})