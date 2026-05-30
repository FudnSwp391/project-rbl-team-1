import { loginRequest } from '@/features/auth/api'
import { DEMO_USER, type LoginCredentials, type LoginResponse } from '@/features/auth/types'
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
