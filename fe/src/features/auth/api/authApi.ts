import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'
import type { LoginCredentials, LoginResponse } from '@/features/auth/types'

export const loginRequest = (credentials: LoginCredentials) =>
  axiosInstance.post<LoginResponse>(API_PATHS.AUTH.LOGIN, credentials)
