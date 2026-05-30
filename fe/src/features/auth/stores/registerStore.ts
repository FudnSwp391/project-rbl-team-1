import { create } from 'zustand'

interface RegisterStoreState {
  showPassword: boolean
  showConfirmPassword: boolean
  togglePasswordVisibility: () => void
  toggleConfirmPasswordVisibility: () => void
}

export const useRegisterStore = create<RegisterStoreState>((set) => ({
  showPassword: false,
  showConfirmPassword: false,
  togglePasswordVisibility: () => set((state) => ({ showPassword: !state.showPassword })),
  toggleConfirmPasswordVisibility: () =>
    set((state) => ({ showConfirmPassword: !state.showConfirmPassword })),
}))
