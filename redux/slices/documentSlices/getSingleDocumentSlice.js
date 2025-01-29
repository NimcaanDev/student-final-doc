import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../src/constants/baseUrl";
import axios from "axios";

const initialState = {
    singleIsLoading: false,
    singleError: '',
    singleData: {},
}

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

export const getSingleDocumentSlice = createSlice({
    name: 'singleDocument',
    initialState,
    extraReducers: (builder) => {
        builder
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
    }
})