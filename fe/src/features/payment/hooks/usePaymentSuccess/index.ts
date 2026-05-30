import { useQuery } from '@tanstack/react-query'
import {
  getDefaultPaymentSuccessData,
  loadPaymentSuccessData,
} from '@/features/payment/services'

export const PAYMENT_SUCCESS_QUERY_KEY = ['payment', 'success'] as const

export default function usePaymentSuccess(transactionId?: string) {
  return useQuery({
    queryKey: [...PAYMENT_SUCCESS_QUERY_KEY, transactionId ?? 'default'],
    queryFn: () => loadPaymentSuccessData(transactionId),
    placeholderData: getDefaultPaymentSuccessData(),
  })
}
