import type { AuthPlan, AuthRole, AuthUser } from '@/shared/types'

export interface LoginCredentials {
  email: string
  password: string
}

export interface LoginResponse {
  user: AuthUser
  token: string
  role: AuthRole
  plan?: AuthPlan
}

export interface LoginFeature {
  id: string
  title: string
  description: string
  icon: 'exam' | 'ai' | 'streak'
}

export const LOGIN_STRINGS = {
  BRAND: 'SEHub',
  WELCOME_TITLE: ['Chào mừng bạn', 'quay trở lại!'],
  WELCOME_DESCRIPTION:
    'Tạo tài khoản để khám phá kho đề thi khổng lồ và kết nối với cộng đồng sinh viên FPT thông minh.',
  FORM_TITLE: 'Đăng nhập',
  FORM_SUBTITLE: 'Chào mừng bạn quay trở lại!',
  EMAIL_LABEL: 'Email',
  EMAIL_PLACEHOLDER: 'example@gmail.com',
  PASSWORD_LABEL: 'Mật khẩu',
  PASSWORD_PLACEHOLDER: '••••••••',
  REMEMBER_ME: 'Ghi nhớ đăng nhập',
  FORGOT_PASSWORD: 'Quên mật khẩu?',
  SUBMIT: 'Đăng nhập',
  DIVIDER: 'Hoặc',
  GOOGLE: 'Tiếp tục với Google',
  NO_ACCOUNT: 'Chưa có tài khoản?',
  REGISTER: 'Đăng ký ngay',
  TAGLINE: 'EMPOWERING STUDENTS GLOBALLY',
  ERROR_GENERIC: 'Đăng nhập thất bại. Vui lòng thử lại.',
  TOGGLE_PASSWORD: 'Hiện/ẩn mật khẩu',
} as const

export const LOGIN_FEATURES: LoginFeature[] = [
  {
    id: 'exams',
    title: 'Kho 500+ đề thi',
    description: 'Cập nhật mỗi ngày từ các trường Top.',
    icon: 'exam',
  },
  {
    id: 'ai',
    title: 'AI giải đáp',
    description: 'Hỗ trợ 24/7 thông minh, chính xác tức thì.',
    icon: 'ai',
  },
  {
    id: 'streak',
    title: 'Tích điểm streak',
    description: 'Duy trì thói quen học tập để nhận quà.',
    icon: 'streak',
  },
]

export const DEMO_USER: AuthUser = {
  fullName: 'Anhpika',
  username: 'Anhpika',
  email: 'anhpika12345@gmail.com',
}
