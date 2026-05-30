import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'
import type { LoginCredentials, LoginResponse, RegisterCredentials } from '@/features/auth/types'

export const loginRequest = (credentials: LoginCredentials) =>
  axiosInstance.post<LoginResponse>(API_PATHS.AUTH.LOGIN, credentials)

export const registerRequest = (payload: RegisterCredentials) =>
  axiosInstance.post(API_PATHS.AUTH.REGISTER, payload)
