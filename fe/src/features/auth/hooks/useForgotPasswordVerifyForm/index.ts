import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useForgotPasswordStore } from '@/features/auth/stores'
import {
  forgotPasswordVerifyEmailSchema,
  forgotPasswordVerifyPhoneSchema,
  type ForgotPasswordVerifyFormValues,
} from '@/features/auth/validations'

export default function useForgotPasswordVerifyForm() {
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)
  const contact = useForgotPasswordStore((state) => state.contact)
  const schema =
    selectedMethod === 'phone' ? forgotPasswordVerifyPhoneSchema : forgotPasswordVerifyEmailSchema

  return useForm<ForgotPasswordVerifyFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      contact: contact ?? '',
    },
    mode: 'onSubmit',
  })
}
