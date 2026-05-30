import { create } from 'zustand'
import type { PlanId } from '@/features/subscription/types'

interface SubscriptionStoreState {
  selectedPlanId: PlanId | null
  isCheckoutPending: boolean
  setSelectedPlanId: (planId: PlanId | null) => void
  setCheckoutPending: (isPending: boolean) => void
  resetSelection: () => void
}

export const useSubscriptionStore = create<SubscriptionStoreState>((set) => ({
  selectedPlanId: null,
  isCheckoutPending: false,
  setSelectedPlanId: (planId) => set({ selectedPlanId: planId }),
  setCheckoutPending: (isCheckoutPending) => set({ isCheckoutPending }),
  resetSelection: () => set({ selectedPlanId: null, isCheckoutPending: false }),
}))
