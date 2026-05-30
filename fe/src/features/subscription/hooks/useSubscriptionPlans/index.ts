import { useQuery } from '@tanstack/react-query'
import { getDefaultSubscriptionData, loadSubscriptionPageData } from '@/features/subscription/services'

export const SUBSCRIPTION_PLANS_QUERY_KEY = ['subscription', 'plans'] as const

export default function useSubscriptionPlans() {
  return useQuery({
    queryKey: SUBSCRIPTION_PLANS_QUERY_KEY,
    queryFn: loadSubscriptionPageData,
    placeholderData: getDefaultSubscriptionData(),
  })
}
