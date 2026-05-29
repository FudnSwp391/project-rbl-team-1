import { createAsyncThunk } from '@reduxjs/toolkit'
import * as authService from './authService'

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await authService.login(credentials)
    return data
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Đăng nhập thất bại')
  }
})

export const register = createAsyncThunk('auth/register', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await authService.register(payload)
    return data
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Đăng ký thất bại')
  }
})

export const verifyOtp = createAsyncThunk('auth/verifyOtp', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await authService.verifyOtp(payload)
    return data
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Xác thực OTP thất bại')
  }
})

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})
