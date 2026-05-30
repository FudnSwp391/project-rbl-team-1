import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  forgotPasswordResetSchema,
  type ForgotPasswordResetFormValues,
} from '@/features/auth/validations'

export default function useForgotPasswordResetForm() {
  return useForm<ForgotPasswordResetFormValues>({
    resolver: zodResolver(forgotPasswordResetSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
  })
}
