import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../src/constants/baseUrl";
import axios from "axios";
import { DEFAULT_ERROR_MESSAGE } from "../../../src/constants/defaultErrorMessage";

const initialState = {
    uploadLoading: false,
    uploadError: '',
    uploadData: {},
}

export const uploadDocumentFn = createAsyncThunk(
    'upload/document',
    async (data, { rejectWithValue, getState }) => {
        const stateData = getState()
        const { token } = stateData?.user?.data
        try {
            const res = await axios.post(`${baseUrl}documents/upload`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return res.data;
        } catch (error) {
            return rejectWithValue(error.message || DEFAULT_ERROR_MESSAGE);
        }
    }
)

export const uploadDocumentSlice = createSlice({
    name: 'uploadDocument',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(uploadDocumentFn.pending, (state) => {
            state.uploadLoading = true
            state.uploadError = ''
            state.uploadData = {}
        })
        builder.addCase(uploadDocumentFn.rejected, (state, action) => {
            state.uploadLoading = false
            state.uploadError = action.payload
            state.uploadData = {}
        })
        builder.addCase(uploadDocumentFn.fulfilled, (state, action) => {
            state.uploadLoading = false
            state.uploadError = ''
            state.uploadData = action.payload
        })
    }
})