import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'

export const login = (credentials) => axiosInstance.post(API_PATHS.AUTH.LOGIN, credentials)
export const register = (payload) => axiosInstance.post(API_PATHS.AUTH.REGISTER, payload)
export const verifyOtp = (payload) => axiosInstance.post(API_PATHS.AUTH.OTP_VERIFY, payload)
export const logout = () => axiosInstance.post(API_PATHS.AUTH.LOGOUT)
export const forgotPassword = (email) =>
  axiosInstance.post(API_PATHS.AUTH.FORGOT_PASSWORD, { email })
