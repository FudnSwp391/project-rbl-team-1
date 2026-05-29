import { createAsyncThunk } from '@reduxjs/toolkit'
import * as postService from './postService'

export const fetchFeed = createAsyncThunk('post/fetchFeed', async (params, { rejectWithValue }) => {
  try {
    const { data } = await postService.getFeed(params)
    return data
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Không tải được bảng tin')
  }
})
