import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { queryClient } from '@/app/queryClient'

interface ExamResultQueryProviderProps {
  children: ReactNode
}

export default function ExamResultQueryProvider({ children }: ExamResultQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
