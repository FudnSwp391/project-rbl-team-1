import { createSlice } from '@reduxjs/toolkit'
import { login, register, logoutThunk, verifyOtp } from './authThunk'

const tokenFromStorage = localStorage.getItem('token')

const initialState = {
  user: null,
  token: tokenFromStorage,
  role: null,
  plan: 'FREE',
  isLoggedIn: Boolean(tokenFromStorage),
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      state.role = null
      state.plan = 'FREE'
      state.isLoggedIn = false
      localStorage.removeItem('token')
    },
    setCredentials: (state, action) => {
      const { user, token, role, plan } = action.payload
      state.user = user
      state.token = token
      state.role = role
      state.plan = plan ?? 'FREE'
      state.isLoggedIn = true
      if (token) localStorage.setItem('token', token)
    },
  },
  extraReducers: (builder) => {
    const pending = (state) => {
      state.loading = true
      state.error = null
    }
    const rejected = (state, action) => {
      state.loading = false
      state.error = action.payload || 'Đã có lỗi xảy ra'
    }

    builder
      .addCase(login.pending, pending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false
        state.user = payload.user
        state.token = payload.token
        state.role = payload.role
        state.plan = payload.plan ?? 'FREE'
        state.isLoggedIn = true
        localStorage.setItem('token', payload.token)
      })
      .addCase(login.rejected, rejected)
      .addCase(register.pending, pending)
      .addCase(register.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(register.rejected, rejected)
      .addCase(verifyOtp.fulfilled, (state, { payload }) => {
        state.loading = false
        state.user = payload.user
        state.token = payload.token
        state.role = payload.role
        state.isLoggedIn = true
        localStorage.setItem('token', payload.token)
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null
        state.token = null
        state.role = null
        state.plan = 'FREE'
        state.isLoggedIn = false
        localStorage.removeItem('token')
      })
  },
})

export const { logout, setCredentials } = authSlice.actions
export default authSlice.reducer
