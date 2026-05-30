import { useNavigate } from 'react-router-dom'
import { useForgotPasswordSuccessStore } from '@/features/auth/stores'

export default function useForgotPasswordSuccessNavigation() {
  const navigate = useNavigate()
  const resetSuccess = useForgotPasswordSuccessStore((state) => state.reset)

  const goToLogin = () => {
    resetSuccess()
    navigate('/login')
  }

  return { goToLogin }
}
