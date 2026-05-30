import { fetchSubscriptionPlans, submitCheckout } from '@/features/subscription/api'
import {
  PLAN_IDS,
  SUBSCRIPTION_STRINGS,
  type CheckoutPayload,
  type CheckoutResponse,
  type FeatureComparisonRow,
  type SubscriptionPageData,
  type SubscriptionPlan,
} from '@/features/subscription/types'

const DEFAULT_PLANS: SubscriptionPlan[] = [
  {
    id: PLAN_IDS.TRIAL,
    name: 'Trải nghiệm',
    duration: '1 tháng',
    priceMonthly: 49000,
    features: [
      { id: 'trial-1', label: 'Xem đáp án đề thi' },
      { id: 'trial-2', label: '1,000 AI tokens/ngày' },
      { id: 'trial-3', label: 'Tải tài liệu học tập' },
      { id: 'trial-4', label: 'Làm bài thi trực tuyến' },
    ],
    buttonLabel: 'Chọn gói này',
    buttonVariant: 'outline',
    variant: 'default',
  },
  {
    id: PLAN_IDS.SEMESTER,
    name: '1 Học kỳ',
    duration: '8 tháng',
    priceMonthly: 35000,
    savingsLabel: 'Tiết kiệm 29%',
    features: [
      { id: 'semester-1', label: 'Mọi tính năng gói 1 tháng' },
      { id: 'semester-2', label: 'Không giới hạn AI tokens', highlight: 'bold' },
      { id: 'semester-3', label: '+ Voucher Ftes 20%', highlight: 'primary' },
    ],
    buttonLabel: 'Bắt đầu ngay',
    buttonVariant: 'primary',
    variant: 'popular',
    isPopular: true,
  },
  {
    id: PLAN_IDS.LIFETIME,
    name: 'Toàn khóa học',
    duration: '4 năm',
    priceMonthly: 20000,
    savingsLabel: 'Tiết kiệm 59%',
    features: [
      { id: 'lifetime-1', label: 'Trọn bộ tính năng vĩnh viễn' },
      { id: 'lifetime-2', label: 'Hỗ trợ 24/7 ưu tiên' },
      { id: 'lifetime-3', label: '+ Voucher Ftes 100%', highlight: 'success' },
    ],
    buttonLabel: 'Chọn gói này',
    buttonVariant: 'outline-primary',
    variant: 'lifetime',
  },
]

const DEFAULT_COMPARISONS: FeatureComparisonRow[] = [
  {
    id: 'compare-1',
    feature: 'Xem câu hỏi đề thi',
    free: { type: 'included' },
    premium: { type: 'included' },
  },
  {
    id: 'compare-2',
    feature: 'Xem đáp án & giải thích chi tiết',
    free: { type: 'excluded' },
    premium: { type: 'included' },
  },
  {
    id: 'compare-3',
    feature: 'Kho tài liệu học tập (Slide, Giáo trình)',
    free: { type: 'excluded' },
    premium: { type: 'included' },
  },
  {
    id: 'compare-4',
    feature: 'AI Assistant hỗ trợ 24/7',
    free: { type: 'badge', label: SUBSCRIPTION_STRINGS.TABLE.LIMITED },
    premium: {
      type: 'text',
      label: SUBSCRIPTION_STRINGS.TABLE.UNLIMITED,
      tone: 'primary',
    },
  },
  {
    id: 'compare-5',
    feature: 'Luyện thi trực tuyến & Chấm điểm',
    free: { type: 'excluded' },
    premium: { type: 'included' },
  },
  {
    id: 'compare-6',
    feature: 'Tích hợp nộp bài qua GitHub',
    free: { type: 'excluded' },
    premium: { type: 'included' },
  },
  {
    id: 'compare-7',
    feature: 'Ưu tiên hỗ trợ học vụ',
    free: { type: 'excluded' },
    premium: { type: 'included' },
  },
  {
    id: 'compare-8',
    feature: 'Voucher Ftes & Quà tặng',
    free: { type: 'excluded' },
    premium: { type: 'included' },
  },
]

export const getDefaultSubscriptionData = (): SubscriptionPageData => ({
  plans: DEFAULT_PLANS,
  comparisons: DEFAULT_COMPARISONS,
})

export const normalizeSubscriptionData = (
  payload: Partial<SubscriptionPageData> | undefined,
): SubscriptionPageData => {
  const fallback = getDefaultSubscriptionData()

  return {
    plans: payload?.plans?.length ? payload.plans : fallback.plans,
    comparisons: payload?.comparisons?.length ? payload.comparisons : fallback.comparisons,
  }
}

export const loadSubscriptionPageData = async (): Promise<SubscriptionPageData> => {
  try {
    const response = await Promise.race([
      fetchSubscriptionPlans(),
      new Promise<never>((_, reject) => {
        window.setTimeout(() => reject(new Error('Subscription API timeout')), 3000)
      }),
    ])
    return normalizeSubscriptionData(response.data)
  } catch {
    return getDefaultSubscriptionData()
  }
}

export const processCheckout = async (payload: CheckoutPayload): Promise<CheckoutResponse> => {
  try {
    const response = await submitCheckout(payload)
    return response.data
  } catch {
    return {
      planId: payload.planId,
      checkoutUrl: `/payment/checkout?planId=${payload.planId}`,
    }
  }
}

export const formatPlanPrice = (priceMonthly: number): string =>
  new Intl.NumberFormat('vi-VN').format(priceMonthly)
