import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  feed: [],
  currentPost: null,
  pagination: { page: 1, pageSize: 10, total: 0 },
  loading: false,
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setFeed: (state, action) => {
      state.feed = action.payload
    },
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload
    },
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload }
    },
  },
})

export const { setFeed, setCurrentPost, setPagination } = postSlice.actions
export default postSlice.reducer
