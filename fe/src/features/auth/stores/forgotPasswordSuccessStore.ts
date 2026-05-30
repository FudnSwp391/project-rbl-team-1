import { create } from 'zustand'

interface ForgotPasswordSuccessStoreState {
  isComplete: boolean
  markComplete: () => void
  reset: () => void
}

export const useForgotPasswordSuccessStore = create<ForgotPasswordSuccessStoreState>((set) => ({
  isComplete: false,
  markComplete: () => set({ isComplete: true }),
  reset: () => set({ isComplete: false }),
}))
