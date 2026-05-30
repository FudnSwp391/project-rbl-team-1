import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { queryClient } from '@/app/queryClient'

interface ExamDetailQueryProviderProps {
  children: ReactNode
}

export default function ExamDetailQueryProvider({ children }: ExamDetailQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
