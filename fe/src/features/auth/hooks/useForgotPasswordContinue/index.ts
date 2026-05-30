import { useNavigate } from 'react-router-dom'
import { useForgotPasswordStore } from '@/features/auth/stores'

export default function useForgotPasswordContinue() {
  const navigate = useNavigate()
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)

  const continueToVerify = () => {
    if (!selectedMethod) return
    navigate('/forgot-password/verify')
  }

  return {
    continueToVerify,
    canContinue: Boolean(selectedMethod),
  }
}
