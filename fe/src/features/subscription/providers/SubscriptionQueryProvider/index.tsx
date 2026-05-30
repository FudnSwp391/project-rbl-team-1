import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { queryClient } from '@/app/queryClient'

interface SubscriptionQueryProviderProps {
  children: ReactNode
}

export default function SubscriptionQueryProvider({ children }: SubscriptionQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
