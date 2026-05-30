import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { queryClient } from '@/app/queryClient'

interface AuthQueryProviderProps {
  children: ReactNode
}

export default function AuthQueryProvider({ children }: AuthQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
