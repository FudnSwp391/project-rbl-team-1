import { createAsyncThunk } from '@reduxjs/toolkit'
import * as examService from './examService'

export const fetchExams = createAsyncThunk('exam/fetchExams', async (params, { rejectWithValue }) => {
  try {
    const { data } = await examService.getExams(params)
    return data
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Không tải được danh sách đề thi')
  }
})
