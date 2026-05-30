import { useQuery } from '@tanstack/react-query'
import {
  getDefaultPaymentCheckoutData,
  loadPaymentCheckoutData,
} from '@/features/payment/services'

export const PAYMENT_CHECKOUT_QUERY_KEY = ['payment', 'checkout'] as const

export default function usePaymentCheckout(planId?: string) {
  return useQuery({
    queryKey: [...PAYMENT_CHECKOUT_QUERY_KEY, planId ?? 'default'],
    queryFn: () => loadPaymentCheckoutData(planId),
    placeholderData: getDefaultPaymentCheckoutData(),
  })
}
