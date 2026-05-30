import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { sendPasswordRecoveryCode } from '@/features/auth/services'
import { useForgotPasswordStore } from '@/features/auth/stores'
import type { ForgotPasswordVerifyFormValues } from '@/features/auth/validations'

export const FORGOT_PASSWORD_VERIFY_MUTATION_KEY = ['auth', 'forgot-password', 'verify'] as const

export default function useForgotPasswordVerify() {
  const navigate = useNavigate()
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)

  return useMutation({
    mutationKey: FORGOT_PASSWORD_VERIFY_MUTATION_KEY,
    mutationFn: (values: ForgotPasswordVerifyFormValues) => {
      if (!selectedMethod) {
        throw new Error('Verification method is required')
      }

      return sendPasswordRecoveryCode({
        method: selectedMethod,
        contact: values.contact,
      })
    },
    onSuccess: () => {
      navigate('/forgot-password/otp')
    },
  })
}
