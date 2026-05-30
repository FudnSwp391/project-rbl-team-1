import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { queryClient } from '@/app/queryClient'

interface PaymentQueryProviderProps {
  children: ReactNode
}

export default function PaymentQueryProvider({ children }: PaymentQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
