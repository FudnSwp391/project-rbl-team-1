import { create } from 'zustand'
import type { VerificationMethod } from '@/features/auth/types'

export const RESEND_COOLDOWN_SECONDS = 60

interface ForgotPasswordStoreState {
  selectedMethod: VerificationMethod | null
  contact: string | null
  resendAvailableAt: number | null
  isOtpVerified: boolean
  setSelectedMethod: (method: VerificationMethod | null) => void
  setContact: (contact: string) => void
  markCodeSent: () => void
  setOtpVerified: (verified: boolean) => void
  reset: () => void
}

export const useForgotPasswordStore = create<ForgotPasswordStoreState>((set) => ({
  selectedMethod: null,
  contact: null,
  resendAvailableAt: null,
  isOtpVerified: false,
  setSelectedMethod: (method) => set({ selectedMethod: method }),
  setContact: (contact) => set({ contact }),
  markCodeSent: () =>
    set({ resendAvailableAt: Date.now() + RESEND_COOLDOWN_SECONDS * 1000 }),
  setOtpVerified: (verified) => set({ isOtpVerified: verified }),
  reset: () =>
    set({ selectedMethod: null, contact: null, resendAvailableAt: null, isOtpVerified: false }),
}))
