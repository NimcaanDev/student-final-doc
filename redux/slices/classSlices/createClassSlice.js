import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../../src/constants/baseUrl'
import { DEFAULT_ERROR_MESSAGE } from '../../../src/constants/defaultErrorMessage'

const initialState = {
    isLoading: false,
    error: '',
    data: {},
}

export const createClassFn = createAsyncThunk(
    'create/class',
    async (data, { rejectWithValue, getState }) => {
        const stateData = getState()
        const { token } = stateData?.user?.data
        try {
            const res = await axios.post(`${baseUrl}classes/new`, data, {
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

export const CreateCLassSLice = createSlice({
    name: 'createClass',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createClassFn.pending, (state) => {
            state.isLoading = true
            state.error = ''
            state.data = {}
        })
        builder.addCase(createClassFn.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
            state.data = {}
        })
        builder.addCase(createClassFn.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        })
    },
})
