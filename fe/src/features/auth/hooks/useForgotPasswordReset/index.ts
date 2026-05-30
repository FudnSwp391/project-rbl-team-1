import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { resetAccountPassword } from '@/features/auth/services'
import { useForgotPasswordStore } from '@/features/auth/stores'
import type { ForgotPasswordResetFormValues } from '@/features/auth/validations'

export const FORGOT_PASSWORD_RESET_MUTATION_KEY = ['auth', 'forgot-password', 'reset'] as const

export default function useForgotPasswordReset() {
  const navigate = useNavigate()
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)
  const contact = useForgotPasswordStore((state) => state.contact)
  const resetRecovery = useForgotPasswordStore((state) => state.reset)

  return useMutation({
    mutationKey: FORGOT_PASSWORD_RESET_MUTATION_KEY,
    mutationFn: (values: ForgotPasswordResetFormValues) => {
      if (!selectedMethod || !contact) {
        throw new Error('Recovery context is required')
      }

      return resetAccountPassword({
        method: selectedMethod,
        contact,
        password: values.password,
      })
    },
    onSuccess: () => {
      resetRecovery()
      navigate('/login')
    },
  })
}
