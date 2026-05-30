import { create } from 'zustand'

interface ForgotPasswordResetStoreState {
  showPassword: boolean
  showConfirmPassword: boolean
  togglePasswordVisibility: () => void
  toggleConfirmPasswordVisibility: () => void
}

export const useForgotPasswordResetStore = create<ForgotPasswordResetStoreState>((set) => ({
  showPassword: false,
  showConfirmPassword: false,
  togglePasswordVisibility: () => set((state) => ({ showPassword: !state.showPassword })),
  toggleConfirmPasswordVisibility: () =>
    set((state) => ({ showConfirmPassword: !state.showConfirmPassword })),
}))
