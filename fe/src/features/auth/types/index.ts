import type { AuthPlan, AuthRole, AuthUser } from '@/shared/types'

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  fullName: string
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

export const AUTH_BRAND = {
  BRAND: 'SEHub',
  DESCRIPTION:
    'Tạo tài khoản để khám phá kho đề thi khổng lồ và kết nối với cộng đồng sinh viên FPT thông minh.',
  TAGLINE: 'EMPOWERING STUDENTS GLOBALLY',
  DIVIDER: 'Hoặc',
  GOOGLE: 'Tiếp tục với Google',
  TOGGLE_PASSWORD: 'Hiện/ẩn mật khẩu',
} as const

export const LOGIN_STRINGS = {
  WELCOME_TITLE: ['Chào mừng bạn', 'quay trở lại!'],
  FORM_TITLE: 'Đăng nhập',
  FORM_SUBTITLE: 'Chào mừng bạn quay trở lại!',
  EMAIL_LABEL: 'Email',
  EMAIL_PLACEHOLDER: 'example@gmail.com',
  PASSWORD_LABEL: 'Mật khẩu',
  PASSWORD_PLACEHOLDER: '••••••••',
  REMEMBER_ME: 'Ghi nhớ đăng nhập',
  FORGOT_PASSWORD: 'Quên mật khẩu?',
  SUBMIT: 'Đăng nhập',
  NO_ACCOUNT: 'Chưa có tài khoản?',
  REGISTER: 'Đăng ký ngay',
  ERROR_GENERIC: 'Đăng nhập thất bại. Vui lòng thử lại.',
} as const

export const REGISTER_STRINGS = {
  WELCOME_TITLE: ['Bắt đầu hành trình', 'của bạn!'],
  FORM_TITLE: 'Tạo tài khoản mới',
  FORM_SUBTITLE: 'Bắt đầu hành trình học tập thông minh cùng SEHub',
  FULL_NAME_LABEL: 'Họ và tên',
  FULL_NAME_PLACEHOLDER: 'Nhập họ tên của bạn',
  EMAIL_LABEL: 'Email',
  EMAIL_PLACEHOLDER: 'example@sehub.ai',
  PASSWORD_LABEL: 'Mật khẩu',
  PASSWORD_PLACEHOLDER: '••••••••',
  CONFIRM_PASSWORD_LABEL: 'Xác nhận mật khẩu',
  CONFIRM_PASSWORD_PLACEHOLDER: '••••••••',
  SUBMIT: 'Đăng ký ngay',
  HAS_ACCOUNT: 'Đã có tài khoản?',
  LOGIN: 'Đăng nhập ngay',
  ERROR_GENERIC: 'Đăng ký thất bại. Vui lòng thử lại.',
} as const

export type VerificationMethod = 'email' | 'phone'

export interface ForgotPasswordFeature {
  id: string
  title: string
  description: string
  icon: 'shield' | 'support'
}

export interface PasswordRecoveryPayload {
  method: VerificationMethod
}

export const FORGOT_PASSWORD_STRINGS = {
  BRAND_TITLE: ['Khôi phục', 'mật khẩu'],
  BRAND_FOOTER: '© 2024 SEHub AI Platform',
  FORM_TITLE: 'Quên mật khẩu?',
  FORM_SUBTITLE: 'Chọn phương thức xác minh để nhận mã khôi phục',
  EMAIL_METHOD_TITLE: 'Qua Email',
  EMAIL_METHOD_DESCRIPTION: 'Gửi mã xác minh đến email đã đăng ký',
  PHONE_METHOD_TITLE: 'Qua Số điện thoại',
  PHONE_METHOD_DESCRIPTION: 'Gửi mã xác minh qua tin nhắn SMS',
  SUBMIT: 'Tiếp tục',
  BACK_TO_LOGIN: 'Quay lại đăng nhập',
  FORM_FOOTER: '© 2024 SEHub AI. Empowering students globally.',
  ERROR_GENERIC: 'Không thể khởi tạo khôi phục mật khẩu. Vui lòng thử lại.',
} as const

export const FORGOT_PASSWORD_FEATURES: ForgotPasswordFeature[] = [
  {
    id: 'security',
    title: 'BẢO MẬT ĐA LỚP',
    description: 'Mã xác minh có thời hạn, bảo vệ tài khoản an toàn.',
    icon: 'shield',
  },
  {
    id: 'support',
    title: 'HỖ TRỢ 24/7',
    description: 'Đội ngũ hỗ trợ sẵn sàng giúp bạn khôi phục tài khoản.',
    icon: 'support',
  },
]

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
