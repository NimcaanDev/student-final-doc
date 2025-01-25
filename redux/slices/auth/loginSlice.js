import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { DEFAULT_ERROR_MESSAGE } from '../../../src/constants/defaultErrorMessage'
import { baseUrl } from '../../../src/constants/baseUrl'

const DEFUALT_USER_DATA = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : {}

const initialState = {
    loading: false,
    error: '',
    data: DEFUALT_USER_DATA || {},
}

export const loginFn = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${baseUrl}users/login`, data)

            return res.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(
                    error.response?.data.message || DEFAULT_ERROR_MESSAGE
                )
            }

            return rejectWithValue(DEFAULT_ERROR_MESSAGE)
        }
    }
)

export const loginSlice = createSlice({
    name: 'login slice',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = {}
            state.loading = false
            state.error = ''

            localStorage.removeItem('userData')
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginFn.pending, (state) => {
            state.loading = true
            state.error = ''
            state.data = {}
        })
        builder.addCase(loginFn.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.data = {}
        })
        builder.addCase(loginFn.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
            state.data = action.payload
        })
    },
})

export const { logout } = loginSlice.actions
