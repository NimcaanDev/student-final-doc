import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../../src/constants/baseUrl'
import { DEFAULT_ERROR_MESSAGE } from '../../../src/constants/defaultErrorMessage'

const initialState = {
    isLoading: false,
    error: '',
    data: {},
}

export const deleteUserFn = createAsyncThunk(
    'delete/user',
    async (id, { rejectWithValue, getState }) => {
        const stateData = getState()
        const { token } = stateData?.user?.data
        try {
            const res = await axios.delete(`${baseUrl}users/delete/${id}`, {
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

export const deleteUserSlice = createSlice({
    name: 'deleteUser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(deleteUserFn.pending, (state) => {
            state.isLoading = true
            state.error = ''
            state.data = {}
        })
        builder.addCase(deleteUserFn.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
            state.data = {}
        })
        builder.addCase(deleteUserFn.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        })
    },
})
