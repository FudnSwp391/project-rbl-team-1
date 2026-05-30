import { create } from 'zustand'
import type { VerificationMethod } from '@/features/auth/types'

interface ForgotPasswordStoreState {
  selectedMethod: VerificationMethod | null
  contact: string | null
  setSelectedMethod: (method: VerificationMethod | null) => void
  setContact: (contact: string) => void
  reset: () => void
}

export const useForgotPasswordStore = create<ForgotPasswordStoreState>((set) => ({
  selectedMethod: null,
  contact: null,
  setSelectedMethod: (method) => set({ selectedMethod: method }),
  setContact: (contact) => set({ contact }),
  reset: () => set({ selectedMethod: null, contact: null }),
}))
