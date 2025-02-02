import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../../src/constants/baseUrl'

const initialState = {
    singleIsLoading: false,
    singleError: '',
    singleData: {},
}

export const getSingleUser = createAsyncThunk(
    'document/single',
    async (id, { rejectWithValue, getState }) => {
        const stateData = getState()
        const { token } = stateData?.user?.data
        try {
            const result = await axios.post(
                `${baseUrl}users/single-user`,
                { id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            return result.data
        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong!')
        }
    }
)

export const getSingleUserSlice = createSlice({
    name: 'singleDocument',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSingleUser.pending, (state) => {
                state.singleIsLoading = true
                state.singleError = ''
                state.singleData = {}
            })
            .addCase(getSingleUser.rejected, (state, action) => {
                state.singleIsLoading = false
                state.singleError = action.payload
                state.singleData = {}
            })
            .addCase(getSingleUser.fulfilled, (state, action) => {
                state.singleIsLoading = false
                state.singleError = ''
                state.singleData = action.payload
            })
    },
})
