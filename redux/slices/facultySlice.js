import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DEFAULT_ERROR_MESSAGE } from '../../src/constants/defaultErrorMessage'
import axios from 'axios'
import { baseUrl } from '../../src/constants/baseUrl'

const initialState = {
    isLoading: false,
    error: '',
    data: {},
    isSingleLoading: false,
    isSingleError: '',
    selectedFaculty: {},
}

export const getAllFaculties = createAsyncThunk(
    'faculty/list',
    async (_, { rejectWithValue }) => {
        try {
            const result = await axios.get(`${baseUrl}faculties/all`)
            return result.data
        } catch (error) {
            return rejectWithValue(error.message || DEFAULT_ERROR_MESSAGE)
        }
    }
)

export const getSingleFaculty = createAsyncThunk(
    'faculty/single',
    async (id, { rejectWithValue }) => {
        try {
            const result = await axios.post(`${baseUrl}faculties/detail`, {
                id,
            })
            return result.data
        } catch (error) {
            return rejectWithValue(error.message || DEFAULT_ERROR_MESSAGE)
        }
    }
)

export const facultySlice = createSlice({
    name: 'faculty slice',
    initialState,
    reducers: {
        resetSelectedFaculty: (state) => {
            state.selectedFaculty = {}
        },
    },
    extraReducers(builder) {
        builder.addCase(getAllFaculties.pending, (state) => {
            ;(state.isLoading = true), (state.error = ''), (state.data = {})
        })
        builder.addCase(getAllFaculties.rejected, (state, action) => {
            ;(state.isLoading = false),
                (state.error = action.payload),
                (state.data = {})
        })
        builder.addCase(getAllFaculties.fulfilled, (state, action) => {
            ;(state.isLoading = false),
                (state.error = ''),
                (state.data = action.payload)
        })
        builder.addCase(getSingleFaculty.pending, (state) => {
            state.isSingleLoading = true
            state.isSingleError = ''
        })
        builder.addCase(getSingleFaculty.fulfilled, (state, action) => {
            ;(state.isSingleLoading = false),
                (state.isSingleError = ''),
                (state.selectedFaculty = action.payload)
        })
    },
})

export const { resetSelectedFaculty } = facultySlice.actions
