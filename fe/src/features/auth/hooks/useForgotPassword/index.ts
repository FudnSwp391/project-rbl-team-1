import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { initiatePasswordRecovery } from '@/features/auth/services'
import type { ForgotPasswordFormValues } from '@/features/auth/validations'

export const FORGOT_PASSWORD_MUTATION_KEY = ['auth', 'forgot-password'] as const

export default function useForgotPassword() {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: FORGOT_PASSWORD_MUTATION_KEY,
    mutationFn: (values: ForgotPasswordFormValues) => initiatePasswordRecovery(values),
    onSuccess: () => {
      navigate('/forgot-password/verify')
    },
  })
}
