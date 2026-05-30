import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  forgotPasswordOtpSchema,
  type ForgotPasswordOtpFormValues,
} from '@/features/auth/validations'

export default function useForgotPasswordOtpForm() {
  return useForm<ForgotPasswordOtpFormValues>({
    resolver: zodResolver(forgotPasswordOtpSchema),
    defaultValues: {
      otp: '',
    },
    mode: 'onSubmit',
  })
}
