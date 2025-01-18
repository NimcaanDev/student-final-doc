import { createSlice } from '@reduxjs/toolkit'
import faculties from '../../src/data/faculties'

const initialState = {
  faculty: faculties[0],
}

export const facultySlice = createSlice({
  name: 'faculty slice',
  initialState,
  reducers: {
    changeFaculty: (state, action) => {
      state.faculty = action.payload
    },
  },
})

export const { changeFaculty } = facultySlice.actions
