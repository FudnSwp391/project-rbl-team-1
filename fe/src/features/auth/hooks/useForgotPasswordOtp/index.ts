import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { verifyPasswordRecoveryOtp } from '@/features/auth/services'
import { useForgotPasswordStore } from '@/features/auth/stores'
import type { ForgotPasswordOtpFormValues } from '@/features/auth/validations'

export const FORGOT_PASSWORD_OTP_MUTATION_KEY = ['auth', 'forgot-password', 'otp'] as const

export default function useForgotPasswordOtp() {
  const navigate = useNavigate()
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)
  const contact = useForgotPasswordStore((state) => state.contact)

  return useMutation({
    mutationKey: FORGOT_PASSWORD_OTP_MUTATION_KEY,
    mutationFn: (values: ForgotPasswordOtpFormValues) => {
      if (!selectedMethod || !contact) {
        throw new Error('Recovery context is required')
      }

      return verifyPasswordRecoveryOtp({
        method: selectedMethod,
        contact,
        otp: values.otp,
      })
    },
    onSuccess: () => {
      navigate('/forgot-password/reset')
    },
  })
}
