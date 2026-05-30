import { create } from 'zustand'

interface PaymentStoreState {
  copiedTransactionId: string | null
  setCopiedTransactionId: (transactionId: string | null) => void
}

export const usePaymentStore = create<PaymentStoreState>((set) => ({
  copiedTransactionId: null,
  setCopiedTransactionId: (copiedTransactionId) => set({ copiedTransactionId }),
}))
