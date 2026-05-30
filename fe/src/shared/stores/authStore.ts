import { create } from 'zustand'
import type { AuthPlan, AuthRole, AuthSession, AuthUser } from '@/shared/types'

const TOKEN_KEY = 'token'

const readStoredToken = (): string | null => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(TOKEN_KEY)
}

interface AuthStoreState extends AuthSession {
  setSession: (payload: {
    user: AuthUser
    token: string
    role: AuthRole
    plan?: AuthPlan
  }) => void
  clearSession: () => void
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  user: null,
  token: readStoredToken(),
  role: null,
  plan: 'FREE',
  isLoggedIn: Boolean(readStoredToken()),
  setSession: ({ user, token, role, plan = 'FREE' }) => {
    localStorage.setItem(TOKEN_KEY, token)
    set({ user, token, role, plan, isLoggedIn: true })
  },
  clearSession: () => {
    localStorage.removeItem(TOKEN_KEY)
    set({ user: null, token: null, role: null, plan: 'FREE', isLoggedIn: false })
  },
}))
