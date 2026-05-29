import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  unreadCount: 0,
  loading: false,
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.items = action.payload
    },
    setUnreadCount: (state, action) => {
      state.unreadCount = action.payload
    },
  },
})

export const { setNotifications, setUnreadCount } = notificationSlice.actions
export default notificationSlice.reducer
