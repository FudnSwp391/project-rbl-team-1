import { useMutation } from '@tanstack/react-query'
import { processCheckout } from '@/features/subscription/services'
import { useSubscriptionStore } from '@/features/subscription/stores/subscriptionStore'
import type { CheckoutPayload } from '@/features/subscription/types'

export default function usePlanCheckout() {
  const setSelectedPlanId = useSubscriptionStore((state) => state.setSelectedPlanId)
  const setCheckoutPending = useSubscriptionStore((state) => state.setCheckoutPending)

  return useMutation({
    mutationFn: (payload: CheckoutPayload) => processCheckout(payload),
    onMutate: (payload) => {
      setSelectedPlanId(payload.planId)
      setCheckoutPending(true)
    },
    onSettled: () => {
      setCheckoutPending(false)
    },
  })
}
