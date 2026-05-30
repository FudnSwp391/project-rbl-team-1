import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import {
  applyAuthSession,
  authenticateUser,
  persistRememberedEmail,
} from '@/features/auth/services'
import { useLoginStore } from '@/features/auth/stores'
import type { LoginFormValues } from '@/features/auth/validations'

export const LOGIN_MUTATION_KEY = ['auth', 'login'] as const

export default function useLogin() {
  const navigate = useNavigate()
  const rememberMe = useLoginStore((state) => state.rememberMe)

  return useMutation({
    mutationKey: LOGIN_MUTATION_KEY,
    mutationFn: (values: LoginFormValues) => authenticateUser(values),
    onSuccess: (session, values) => {
      applyAuthSession(session)
      persistRememberedEmail(values.email, rememberMe)
      navigate('/feed')
    },
  })
}
