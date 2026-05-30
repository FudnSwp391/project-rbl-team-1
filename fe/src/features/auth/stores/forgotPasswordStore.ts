import { create } from 'zustand'
import type { VerificationMethod } from '@/features/auth/types'

interface ForgotPasswordStoreState {
  selectedMethod: VerificationMethod | null
  setSelectedMethod: (method: VerificationMethod | null) => void
  reset: () => void
}

export const useForgotPasswordStore = create<ForgotPasswordStoreState>((set) => ({
  selectedMethod: null,
  setSelectedMethod: (method) => set({ selectedMethod: method }),
  reset: () => set({ selectedMethod: null }),
}))
