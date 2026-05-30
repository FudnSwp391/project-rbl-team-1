import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'
import type {
  LoginCredentials,
  LoginResponse,
  PasswordRecoveryPayload,
  RegisterCredentials,
  VerificationMethod,
} from '@/features/auth/types'

export const loginRequest = (credentials: LoginCredentials) =>
  axiosInstance.post<LoginResponse>(API_PATHS.AUTH.LOGIN, credentials)

export const registerRequest = (payload: RegisterCredentials) =>
  axiosInstance.post(API_PATHS.AUTH.REGISTER, payload)

export const forgotPasswordInitRequest = (payload: PasswordRecoveryPayload) =>
  axiosInstance.post(API_PATHS.AUTH.FORGOT_PASSWORD, payload)

export const otpSendRequest = (payload: { method: VerificationMethod }) =>
  axiosInstance.post(API_PATHS.AUTH.OTP_SEND, payload)
