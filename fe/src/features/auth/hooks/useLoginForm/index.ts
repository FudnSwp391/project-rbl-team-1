import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { getRememberedEmail } from '@/features/auth/services'
import { loginSchema, type LoginFormValues } from '@/features/auth/validations'

export default function useLoginForm() {
  return useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: getRememberedEmail(),
      password: '',
    },
    mode: 'onSubmit',
  })
}
