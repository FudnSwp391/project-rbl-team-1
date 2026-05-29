import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/auth/authSlice'
import postReducer from '@/features/community/postSlice'
import profileReducer from '@/features/profile/profileSlice'
import chatReducer from '@/features/social/chatSlice'
import notificationReducer from '@/features/notification/notificationSlice'
import examReducer from '@/features/exam/examSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    profile: profileReducer,
    chat: chatReducer,
    notification: notificationReducer,
    exam: examReducer,
  },
})
