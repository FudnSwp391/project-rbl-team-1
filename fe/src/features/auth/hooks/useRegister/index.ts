import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { applyAuthSession, registerUser } from '@/features/auth/services'
import type { RegisterFormValues } from '@/features/auth/validations'

export const REGISTER_MUTATION_KEY = ['auth', 'register'] as const

export default function useRegister() {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: REGISTER_MUTATION_KEY,
    mutationFn: (values: RegisterFormValues) =>
      registerUser({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      }),
    onSuccess: (session) => {
      applyAuthSession(session)
      navigate('/feed')
    },
  })
}
