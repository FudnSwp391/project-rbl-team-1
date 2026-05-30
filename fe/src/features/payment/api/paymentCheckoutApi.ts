import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'
import type { PaymentCheckoutData } from '@/features/payment/types'

export const fetchPaymentCheckout = (planId?: string) =>
  axiosInstance.get<PaymentCheckoutData>(`${API_PATHS.PREMIUM}/payment/checkout`, {
    params: planId ? { planId } : undefined,
  })
