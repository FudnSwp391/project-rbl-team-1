import { useMutation } from '@tanstack/react-query'
import { resendPasswordRecoveryCode } from '@/features/auth/services'
import { useForgotPasswordStore } from '@/features/auth/stores'

export const FORGOT_PASSWORD_RESEND_MUTATION_KEY = ['auth', 'forgot-password', 'resend'] as const

export default function useForgotPasswordResend() {
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)
  const contact = useForgotPasswordStore((state) => state.contact)

  return useMutation({
    mutationKey: FORGOT_PASSWORD_RESEND_MUTATION_KEY,
    mutationFn: () => {
      if (!selectedMethod || !contact) {
        throw new Error('Recovery context is required')
      }

      return resendPasswordRecoveryCode({
        method: selectedMethod,
        contact,
      })
    },
  })
}
