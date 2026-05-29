export const ROLES = {
  STUDENT: 'STUDENT',
  MOD: 'MOD',
  ADMIN: 'ADMIN',
}

export const PLAN_TYPES = {
  FREE: 'FREE',
  PREMIUM: 'PREMIUM',
}

export const RANK_LEVELS = [
  { key: 'BRONZE', label: 'Bronze', minXp: 0 },
  { key: 'SILVER', label: 'Silver', minXp: 500 },
  { key: 'GOLD', label: 'Gold', minXp: 1500 },
  { key: 'PLATINUM', label: 'Platinum', minXp: 4000 },
  { key: 'DIAMOND', label: 'Diamond', minXp: 10000 },
]

export const API_PATHS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    OTP_SEND: '/auth/otp/send',
    OTP_VERIFY: '/auth/otp/verify',
    FORGOT_PASSWORD: '/auth/forgot-password',
  },
  POSTS: '/posts',
  PROFILE: '/profile',
  EXAMS: '/exams',
  DOCUMENTS: '/documents',
  PREMIUM: '/premium',
  ADMIN: '/admin',
  MOD: '/moderator',
}
