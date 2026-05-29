import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  exams: [],
  currentExam: null,
  result: null,
  loading: false,
}

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setExams: (state, action) => {
      state.exams = action.payload
    },
    setCurrentExam: (state, action) => {
      state.currentExam = action.payload
    },
    setResult: (state, action) => {
      state.result = action.payload
    },
  },
})

export const { setExams, setCurrentExam, setResult } = examSlice.actions
export default examSlice.reducer
