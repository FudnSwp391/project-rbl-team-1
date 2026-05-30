import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'
import type { PaymentSuccessData } from '@/features/payment/types'

export const fetchPaymentSuccess = (transactionId?: string) =>
  axiosInstance.get<PaymentSuccessData>(`${API_PATHS.PREMIUM}/payment/success`, {
    params: transactionId ? { transactionId } : undefined,
  })
