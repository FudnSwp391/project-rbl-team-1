import { create } from 'zustand'
import type { VerificationMethod } from '@/features/auth/types'

export const RESEND_COOLDOWN_SECONDS = 60

interface ForgotPasswordStoreState {
  selectedMethod: VerificationMethod | null
  contact: string | null
  resendAvailableAt: number | null
  setSelectedMethod: (method: VerificationMethod | null) => void
  setContact: (contact: string) => void
  markCodeSent: () => void
  reset: () => void
}

export const useForgotPasswordStore = create<ForgotPasswordStoreState>((set) => ({
  selectedMethod: null,
  contact: null,
  resendAvailableAt: null,
  setSelectedMethod: (method) => set({ selectedMethod: method }),
  setContact: (contact) => set({ contact }),
  markCodeSent: () =>
    set({ resendAvailableAt: Date.now() + RESEND_COOLDOWN_SECONDS * 1000 }),
  reset: () => set({ selectedMethod: null, contact: null, resendAvailableAt: null }),
}))
