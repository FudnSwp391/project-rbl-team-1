import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'
import type { CheckoutPayload, CheckoutResponse, SubscriptionPageData } from '@/features/subscription/types'

export const fetchSubscriptionPlans = () =>
  axiosInstance.get<SubscriptionPageData>(`${API_PATHS.PREMIUM}/plans`)

export const submitCheckout = (payload: CheckoutPayload) =>
  axiosInstance.post<CheckoutResponse>(`${API_PATHS.PREMIUM}/checkout`, payload)
