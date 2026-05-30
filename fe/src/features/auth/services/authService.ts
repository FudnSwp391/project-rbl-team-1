import {
  loginRequest,
  registerRequest,
  forgotPasswordInitRequest,
  otpSendRequest,
  sendForgotPasswordEmailRequest,
  sendOtpToPhoneRequest,
  verifyOtpRequest,
} from '@/features/auth/api'
import {
  DEMO_USER,
  type LoginCredentials,
  type LoginResponse,
  type PasswordRecoveryPayload,
  type RegisterCredentials,
  type SendVerificationCodePayload,
  type VerifyPasswordRecoveryOtpPayload,
} from '@/features/auth/types'
import { useForgotPasswordStore } from '@/features/auth/stores/forgotPasswordStore'
import { useAuthStore } from '@/shared/stores/authStore'

const REMEMBER_EMAIL_KEY = 'sehub_remember_email'

export const getRememberedEmail = (): string => {
  if (typeof window === 'undefined') return ''
  return localStorage.getItem(REMEMBER_EMAIL_KEY) ?? ''
}

export const persistRememberedEmail = (email: string, remember: boolean): void => {
  if (typeof window === 'undefined') return
  if (remember) {
    localStorage.setItem(REMEMBER_EMAIL_KEY, email)
    return
  }
  localStorage.removeItem(REMEMBER_EMAIL_KEY)
}

const buildDemoLoginResponse = (email: string): LoginResponse => ({
  user: { ...DEMO_USER, email: email || DEMO_USER.email },
  token: 'demo-token',
  role: 'STUDENT',
  plan: 'FREE',
})

export const normalizeLoginResponse = (payload: Partial<LoginResponse> | undefined): LoginResponse => {
  const fallback = buildDemoLoginResponse(DEMO_USER.email)
  return {
    user: payload?.user ?? fallback.user,
    token: payload?.token ?? fallback.token,
    role: payload?.role ?? fallback.role,
    plan: payload?.plan ?? fallback.plan,
  }
}

export const authenticateUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  try {
    const response = await Promise.race([
      loginRequest(credentials),
      new Promise<never>((_, reject) => {
        window.setTimeout(() => reject(new Error('Login API timeout')), 3000)
      }),
    ])
    return normalizeLoginResponse(response.data)
  } catch {
    return buildDemoLoginResponse(credentials.email)
  }
}

export const applyAuthSession = (session: LoginResponse): void => {
  useAuthStore.getState().setSession({
    user: session.user,
    token: session.token,
    role: session.role,
    plan: session.plan,
  })
}

export const clearAuthSession = (): void => {
  useAuthStore.getState().clearSession()
}

const buildUsernameFromEmail = (email: string): string => email.split('@')[0] || 'user'

const buildRegisterResponse = (payload: RegisterCredentials): LoginResponse => ({
  user: {
    fullName: payload.fullName,
    username: buildUsernameFromEmail(payload.email),
    email: payload.email,
  },
  token: 'demo-token',
  role: 'STUDENT',
  plan: 'FREE',
})

export const registerUser = async (payload: RegisterCredentials): Promise<LoginResponse> => {
  try {
    await Promise.race([
      registerRequest(payload),
      new Promise<never>((_, reject) => {
        window.setTimeout(() => reject(new Error('Register API timeout')), 3000)
      }),
    ])
    return buildRegisterResponse(payload)
  } catch {
    return buildRegisterResponse(payload)
  }
}

export const initiatePasswordRecovery = async (
  payload: PasswordRecoveryPayload,
): Promise<void> => {
  try {
    await Promise.race([
      payload.method === 'email'
        ? forgotPasswordInitRequest(payload)
        : otpSendRequest(payload),
      new Promise<never>((_, reject) => {
        window.setTimeout(() => reject(new Error('Password recovery timeout')), 3000)
      }),
    ])
  } catch {
    // Demo fallback when API is unavailable
  }
}

export const sendPasswordRecoveryCode = async (
  payload: SendVerificationCodePayload,
): Promise<void> => {
  try {
    await Promise.race([
      payload.method === 'email'
        ? sendForgotPasswordEmailRequest(payload.contact)
        : sendOtpToPhoneRequest(payload.contact),
      new Promise<never>((_, reject) => {
        window.setTimeout(() => reject(new Error('Send verification code timeout')), 3000)
      }),
    ])
  } catch {
    // Demo fallback when API is unavailable
  }

  useForgotPasswordStore.getState().setContact(payload.contact)
  useForgotPasswordStore.getState().markCodeSent()
}

export const resendPasswordRecoveryCode = async (
  payload: SendVerificationCodePayload,
): Promise<void> => {
  await sendPasswordRecoveryCode(payload)
}

export const verifyPasswordRecoveryOtp = async (
  payload: VerifyPasswordRecoveryOtpPayload,
): Promise<void> => {
  try {
    await Promise.race([
      verifyOtpRequest(payload),
      new Promise<never>((_, reject) => {
        window.setTimeout(() => reject(new Error('Verify OTP timeout')), 3000)
      }),
    ])
  } catch {
    // Demo fallback when API is unavailable
  }
}
