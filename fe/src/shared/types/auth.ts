export type AuthRole = 'STUDENT' | 'MOD' | 'ADMIN'

export type AuthPlan = 'FREE' | 'PREMIUM'

export interface AuthUser {
  fullName: string
  username: string
  email: string
}

export interface AuthSession {
  user: AuthUser | null
  token: string | null
  role: AuthRole | null
  plan: AuthPlan
  isLoggedIn: boolean
}
