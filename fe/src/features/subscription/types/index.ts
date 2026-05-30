export const SUBSCRIPTION_STRINGS = {
  PAGE: {
    BADGE: 'Nâng cấp tài khoản',
    TITLE: 'Chọn gói phù hợp dành cho bạn',
    DESCRIPTION_LINE_1:
      'Mở khóa toàn bộ tính năng premium: đáp án đề thi, AI hỗ trợ không giới hạn, tài liệu chất',
    DESCRIPTION_LINE_2: 'lượng cao và công cụ luyện thi trực tuyến.',
    COMPARISON_TITLE: 'So sánh chi tiết tính năng',
    PER_MONTH: '/tháng',
    POPULAR_BADGE: 'PHỔ BIẾN NHẤT',
  },
  TABLE: {
    FEATURE_COLUMN: 'TÍNH NĂNG',
    FREE_COLUMN: 'FREE',
    PREMIUM_COLUMN: 'PREMIUM',
    LIMITED: 'Giới hạn',
    UNLIMITED: 'Không giới hạn',
  },
  HEADER: {
    SEARCH_PLACEHOLDER: 'Tìm kiếm...',
    BRAND: 'SEHub',
  },
  MOCK_USER: {
    EMAIL: 'tngo28299@gmail.com',
    INITIAL: 'T',
    NOTIFICATION_COUNT: 7,
    STREAK_COUNT: 7,
  },
  SIDEBAR: {
    HOME: 'Trang chủ',
    ADVISOR: 'Trợ lý tư vấn thủ tục trường',
    FIND_FRIENDS: 'Tìm kiếm bạn bè',
    SUBJECTS_SECTION: 'MÔN HỌC',
    REVIEW_QUESTIONS: 'Câu hỏi ôn tập',
    PRACTICE_QUESTIONS: 'Câu hỏi thực hành tài liệu',
    DOCUMENTS: 'Tài liệu',
    INTERACTION_SECTION: 'TƯƠNG TÁC',
    MESSAGES: 'Nhắn tin',
    COMMUNITY_TITLE: 'Tham gia cộng đồng',
    COMMUNITY_DESCRIPTION_LINE_1: 'Kết nối với hàng ngàn sinh viên',
    COMMUNITY_DESCRIPTION_LINE_2: 'SEHub khác trên Discord.',
    COMMUNITY_CTA: 'Tham gia ngay',
    FEEDBACK: 'Gửi phản hồi',
  },
  CHECKOUT: {
    SUCCESS: 'Đã chọn gói thành công. Đang chuyển hướng thanh toán...',
    ERROR: 'Không thể xử lý gói đăng ký. Vui lòng thử lại.',
  },
  LOADING: 'Đang tải gói đăng ký...',
} as const

export const PLAN_IDS = {
  TRIAL: 'trial',
  SEMESTER: 'semester',
  LIFETIME: 'lifetime',
} as const

export type PlanId = (typeof PLAN_IDS)[keyof typeof PLAN_IDS]

export type PlanButtonVariant = 'outline' | 'primary' | 'outline-primary'

export type PlanCardVariant = 'default' | 'popular' | 'lifetime'

export type FeatureHighlight = 'default' | 'success' | 'primary' | 'bold'

export interface PlanFeature {
  id: string
  label: string
  highlight?: FeatureHighlight
}

export interface SubscriptionPlan {
  id: PlanId
  name: string
  duration: string
  priceMonthly: number
  savingsLabel?: string
  features: PlanFeature[]
  buttonLabel: string
  buttonVariant: PlanButtonVariant
  variant: PlanCardVariant
  isPopular?: boolean
}

export type FeatureCellType = 'included' | 'excluded' | 'badge' | 'text'

export interface FeatureCellValue {
  type: FeatureCellType
  label?: string
  tone?: 'primary' | 'default'
}

export interface FeatureComparisonRow {
  id: string
  feature: string
  free: FeatureCellValue
  premium: FeatureCellValue
}

export interface SubscriptionPageData {
  plans: SubscriptionPlan[]
  comparisons: FeatureComparisonRow[]
}

export interface CheckoutPayload {
  planId: PlanId
}

export interface CheckoutResponse {
  checkoutUrl: string
  planId: PlanId
}

export interface NavItem {
  id: string
  label: string
  to: string
  isActive?: boolean
}

export interface SidebarSection {
  id: string
  title?: string
  items: NavItem[]
}
