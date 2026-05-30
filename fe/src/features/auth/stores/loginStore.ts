import { create } from 'zustand'

interface LoginStoreState {
  rememberMe: boolean
  showPassword: boolean
  setRememberMe: (rememberMe: boolean) => void
  togglePasswordVisibility: () => void
}

export const useLoginStore = create<LoginStoreState>((set) => ({
  rememberMe: false,
  showPassword: false,
  setRememberMe: (rememberMe) => set({ rememberMe }),
  togglePasswordVisibility: () => set((state) => ({ showPassword: !state.showPassword })),
}))
